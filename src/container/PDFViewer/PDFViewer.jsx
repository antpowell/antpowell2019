import React from "react";
import PDFNavigationBar from "../../components/PDFNavigationBar/PDFNavigationBar";
import SnappingSection from "../../components/SnappingSection/SnappingSection";

const PDFViewer = ({ bgColor = "#212121" }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(33, 33, 33, 1)",
        paddingBottom: "16px"
      }}
    >
      <SnappingSection>
        <PDFNavigationBar />
      </SnappingSection>
    </div>
  );
};

export default PDFViewer;
