import MyUploader from "./Dropzone";
import ImageViewer from "./ImageViewer";
import PdfViewer from "./PdfViewer";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  return (
    <div>
      <MyUploader />
      <br />
      <VideoPlayer />
      <br />
      <ImageViewer />
      <br />
      <PdfViewer />
    </div>
  );
};

export default App;
