import { PDFViewer } from "@react-pdf/renderer";
import PdfCard from "./utils/Pdfcard";
import Invoice from "./utils/Invoice";

function App() {
  const cards = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gap: "1rem",
    padding: "20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };
  const PDFViewerStyleContainer = {
    width: "100vw",
    height: "100vh",
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List of invoices</h2>
      <div style={cards}>
        <PdfCard title="Oasic ltd Invoice" />
      </div>
      <div style={{ height: "100vh", width: "100vw" }}>
        <PDFViewer style={{ height: "100%", width: "100%" }}>
          <Invoice />
        </PDFViewer>
      </div>
    </div>
  );
}

export default App;
