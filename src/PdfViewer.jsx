
// при установке важно добавить worker


import React, {useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import "pdfjs-dist/build/pdf.worker.js"

import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
// Import styles
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';


export function PdfView(params) {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, NumberOfPages  } = pageNavigationPluginInstance;
  // const totalPages = pageNavigationPluginInstance.NumberOfPages.totalPages;

  // console.log(totalPages); // This should print the correct total number of pages
  const pdf = "./assets/pdf.pdf"

  return (

    <div >
           <div className='grid'>
        {[...Array(30+1).keys()].slice(1).map((item) => {return <button onClick={() => jumpToPage(item)}>page {item} </button>})}
      </div>
      <br />
        <Worker workerUrl={pdfWorker} >
            <div
              style={{
                  border: '1px solid rgba(0, 0, 0, 0.3)',
                  height: '750px',
              }}
          >
        <Viewer
          fileUrl={pdf}
          plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
        />
        </div>
    </Worker >
 
    </div>


  );
}

// import React, { useRef, useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
// import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// export const PdfView = () => {
//   const viewerRef = useRef(null);
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
//   const pdf = "./assets/pdf.pdf";

//   const [currentPage, setCurrentPage] = useState(1);

//   const handleDocumentClick = (event) => {
//     if (viewerRef.current && !viewerRef.current.contains(event.target)) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handleGoToPreviousPage = () => {
//     viewerRef.current && viewerRef.current.goBackward();
//   };

//   const handleGoToNextPage = () => {
//     viewerRef.current && viewerRef.current.goForward();
//   };

//   return (
//     <div onClick={handleDocumentClick}>
//       <Worker workerUrl={pdfWorker}>
//         <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '750px' }}>
//           <Viewer
//             fileUrl={pdf}
//             plugins={[defaultLayoutPluginInstance]}
//             ref={viewerRef}
//           />
//         </div>
//         <div>
//           <GoToPageButtons
//             currentPage={currentPage}
//             setCurrentPage={setCurrentPage}
//             handleGoToPreviousPage={handleGoToPreviousPage}
//             handleGoToNextPage={handleGoToNextPage}
//           />
//         </div>
//       </Worker>
//     </div>
//   );
// };

// const GoToPageButtons = ({ currentPage, setCurrentPage, handleGoToPreviousPage, handleGoToNextPage }) => {
//   return (
//     <div>
//       <button onClick={handleGoToPreviousPage}>Go to Previous Page</button>
//       <button onClick={handleGoToNextPage}>Go to Next Page</button>
//       <div>
//         Current Page: {currentPage}
//       </div>
//     </div>
//   );
// };