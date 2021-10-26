package storage

import (
	"context"
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"io"
	"log"
	"net/url"
	"os"
	"path/filepath"

	"github.com/Azure/azure-storage-blob-go/azblob"
	"github.com/Ovenoboyo/basic_webserver/v2/pkg/db"
	"github.com/google/uuid"
)

const (
	containerName = "azureproject"
	accountName   = "projectstorage69"
)

var containerURL azblob.ContainerURL

// InitializeStorage creates azure storage instances
func InitializeStorage() {
	credential, err := azblob.NewSharedKeyCredential("projectstorage69", "+kpPRjIysUxKy2QhxRsJRrFGmOoJY/3o6eD4ZTOqTqC7wABPS0CUyvn3dzbOy4MYtBQ8sS+VO1SbxPmqupwgNA==")
	if err != nil {
		log.Println(err)
	}

	p := azblob.NewPipeline(credential, azblob.PipelineOptions{})

	URL, _ := url.Parse(
		fmt.Sprintf("https://%s.blob.core.windows.net/%s", accountName, containerName))
	containerURL = azblob.NewContainerURL(*URL, p)
}

func writeToLocalStorage(readerCloser *io.ReadCloser) (string, error) {
	fileName := filepath.Join("tmp", uuid.New().String())
	if _, err := os.Stat("tmp"); os.IsNotExist(err) {
		os.Mkdir("tmp", os.ModePerm)
	}

	outFile, err := os.Create(fileName)
	defer outFile.Close()

	if err != nil {
		log.Println(err)
		return "", err
	}

	_, err = io.Copy(outFile, *readerCloser)
	if err != nil {
		log.Println(err)
		return "", err
	}

	return fileName, nil
}

func getMD5(file *os.File) string {
	h := md5.New()
	if _, err := io.Copy(h, file); err != nil {
		log.Fatal(err)
	}
	sum := md5.Sum(nil)
	return hex.EncodeToString(sum[:])
}

// UploadToStorage will upload blob from reader to azure storage
func UploadToStorage(readCloser *io.ReadCloser, destination string, uid string) error {
	fileName, err := writeToLocalStorage(readCloser)
	defer os.Remove(fileName)

	if err != nil {
		return err
	}

	ctx := context.Background()
	_, err = containerURL.Create(ctx, azblob.Metadata{}, azblob.PublicAccessNone)
	if err != nil {
		// Ignore if already created
	}

	blobURL := containerURL.NewBlockBlobURL(destination)
	file, err := os.Open(fileName)
	defer file.Close()

	if err != nil {
		return err
	}

	md5 := getMD5(file)
	stat, err := os.Stat(fileName)
	if err != nil {
		return err
	}

	_, err = azblob.UploadFileToBlockBlob(ctx, file, blobURL, azblob.UploadToBlockBlobOptions{
		BlockSize:   4 * 1024 * 1024,
		Parallelism: 16})

	if err != nil {
		return err
	}

	err = db.AddFileMetaToDB(destination, md5, uid, int(stat.Size()))

	return err

}