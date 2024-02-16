import { Viewer, Worker } from "@react-pdf-viewer/core";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

const PdfViewer = () => {
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: (file) => {
      // `file.name` is the URL of opened file
      const fileName = file.name.substring(file.name.lastIndexOf("/") + 1);
      return `a-copy-of-${fileName}`;
    },
  });

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
        }}
      >
        <Viewer
          plugins={[getFilePluginInstance]}
          fileUrl="https://pdfobject.com/pdf/sample.pdf"
        />
      </div>
    </Worker>
  );
};

export default PdfViewer;
