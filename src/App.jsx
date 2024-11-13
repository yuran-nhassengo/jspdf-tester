import React from 'react';
import { Button, DownloadIcon } from 'lumina-ui';
import {PdfGenerator} from '../src/components/generator'

const App = () => {

  // Function to generate PDF when the button is clicked
  const generatePdf = () => {
    PdfGenerator();
  }

  // Render the main content
  return (
    <div style={{ justifyContent: "center", display: "flex", alignItems: "center", height: "100vh" }}>
      <div>
        <p>Click here to download the PDF file.</p>
        <div style={{display:"flex",justifyContent:"center"}}>
          <Button
            onClick={generatePdf}
            icon={<DownloadIcon />}
            type="button"
            shape="rectangle"
            size="small"
          >
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App