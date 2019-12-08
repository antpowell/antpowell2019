import React from "react";
import PDFNavigationBar from "../../components/PDFNavigationBar/PDFNavigationBar";
import SnappingSection from "../../components/SnappingSection/SnappingSection";

const PDFViewer = ({ bgColor }) => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#212121" }}>
      <SnappingSection>
        <PDFNavigationBar />
      </SnappingSection>
    </div>
  );
};

export default PDFViewer;
