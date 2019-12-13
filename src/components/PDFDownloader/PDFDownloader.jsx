import React, { useState, useEffect } from "react";

const PDFDownloader = ({
  canvas,
  startDownload,
  fileName = `AnthonyPowell_resume_${new Date().getHours()}_${new Date().getMinutes()}.png`
}) => {
  const [downloadURL] = useState(canvas.toDataURL());
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadFileName] = useState(fileName);

  const createDownloadElement = () => {
    const a = document.createElement("a");
    a.style.display = "none";

    a.href = downloadURL;

    a.download = downloadFileName;
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    setIsDownloading(false);
  };

  const download = withFileName => {
    console.log(`received download request with file name ${withFileName}`);
    setIsDownloading(true);
    createDownloadElement();
  };

  useEffect(() => {
    if (startDownload) {
      console.log(startDownload);
      download(fileName);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas, startDownload]);

  return <div></div>;
};

export default PDFDownloader;
