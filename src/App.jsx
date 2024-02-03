import './index.css'
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import worker from './!!!!worker'; // Используем worker.js

pdfjs.GlobalWorkerOptions.workerSrc = URL.createObjectURL(new Blob([`(${worker})()`], { type: 'application/javascript' }));

export function App() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(numPages);
    setNumPages(numPages)
  }

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    setPageNumber((prevPageNumber) => prevPageNumber + delta);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  // console.log(numPages)
  // numPages && console.log([...Array(numPages+1).keys()].splice(1, numPages+1))
  return (
    <div>
        <div className='grid'>
          {numPages && [...Array(numPages).keys()].map((item, i) => (
            <button
                key={i+1}
                onClick={() => setPageNumber(i+1)}
                style={{
                  'background': i+1 === pageNumber ? 'green' : 'initial',
                  'color': i+1 === pageNumber ? 'white' : 'initial'
                  }}>
              Страница {i+1}
            </button>
          ))}
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <Document file="./assets/pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={windowSize.width}
              height={windowSize.height}
            />
        </Document>
    </div>
  );
}



export const PdfViewerScroll = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    setPageNumber((prevPageNumber) => Math.max(1, Math.min(numPages, prevPageNumber - delta)));
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [numPages]);

  return (
    <div>
      <Document file="./assets/pdf.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {[...Array(numPages).keys()].map((page) => (
          <Page key={`page_${page + 1}`} pageNumber={page + 1} />
        ))}
      </Document>
    </div>
  );
};
