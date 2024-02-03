import React from 'react';
import ReactDOM from 'react-dom/client';
// import {App, PdfViewerScroll} from './App';
import { PdfView } from './PdfViewer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <br/>
    {/* <PdfViewerScroll/> */}
    <PdfView/>
  </React.StrictMode>
);
