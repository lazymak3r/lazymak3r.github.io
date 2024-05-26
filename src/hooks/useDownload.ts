interface DownloadCallback {
    completed: boolean;
    progress: number;
    receivedLength: number;
    contentLength: number;
}

export const useDownload = (callback: (info: DownloadCallback) => void, file: string, name: string) => {
    function downloadFile(fileUrl: string, fileName: string): void {
        const a = document.createElement("a");
        a.href = fileUrl;
        a.setAttribute("download", fileName);
        a.click();
    }

    async function download(): Promise<void> {
        const response = await fetch(file);
        if (!response.body) throw new Error("Response body is null");
        const reader = response.body.getReader();
        const contentLengthHeader = response.headers.get('Content-Length');
        if (!contentLengthHeader) throw new Error("Content-Length header is missing");
        const contentLength = +contentLengthHeader;
        let receivedLength = 0;
        let chunks: Uint8Array[] = [];
        while (true) {
            const {done, value} = await reader.read();
            if (done) {
                break;
            }
            chunks.push(value);
            receivedLength += value.length;
            callback({
                completed: false,
                progress: receivedLength / contentLength * 100,
                receivedLength: receivedLength,
                contentLength: contentLength
            });
        }

        const blob = new Blob(chunks);
        const objectUrl = URL.createObjectURL(blob);
        downloadFile(objectUrl, name);
        URL.revokeObjectURL(objectUrl);

        callback({
            completed: true,
            progress: 100,
            receivedLength: contentLength,
            contentLength: contentLength
        });
    }

    const start = (): void => {
        download();
    }

    return {start};
}