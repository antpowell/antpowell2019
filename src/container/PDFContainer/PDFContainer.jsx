import React, { useState, useEffect, useRef } from "react";
import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import PDFDownloader from "../../components/PDFDownloader/PDFDownloader";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const PDFContainer = ({ src, downloadResume }) => {
  const [scale, setScale] = useState(1.2);
  const [renderingComplete, setRenderingComplete] = useState(false);
  const pdfRenderer = useRef(HTMLCanvasElement);

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfjs.getDocument(src);

      const pdf = await loadingTask.promise;

      const firstPageNumber = 1;

      const page = await pdf.getPage(firstPageNumber);

      // Rotate page by degree ie. 0 90 180 270
      page._pageInfo.rotate = 0;

      const viewport = page.getViewport({ scale: scale });

      // Prepare canvas using PDF page dimensions
      const canvas = pdfRenderer.current;

      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);

      await renderTask.promise;
      setRenderingComplete(true);
      console.log(downloadResume);
    };

    fetchPdf();
  }, [scale, src, downloadResume]);

  return (
    <div className="flex justify-center items-center m-auto">
      <canvas
        className="pdf-renderer"
        ref={pdfRenderer}
        width={window.innerWidth}
        height={window.innerHeight}
      ></canvas>
      {renderingComplete && downloadResume ? (
        <PDFDownloader
          canvas={pdfRenderer.current}
          startDownload={downloadResume}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PDFContainer;
