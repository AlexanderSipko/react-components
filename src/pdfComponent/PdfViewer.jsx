
// при установке важно добавить worker
import React, {useState, useEffect } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import "pdfjs-dist/build/pdf.worker.js"
// Import styles
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';



const manipulateRenderButton = (jumpToPage) => {
    const buttons = [...Array(30+1).keys()].map((item) => {
      return <button key={item} onMouseEnter={() => jumpToPage(item)}>page {item+1}</button>})
    return buttons
}


export function PdfViewer(params) {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { jumpToPage, NumberOfPages, CurrentPageInput  } = pageNavigationPluginInstance;

  console.log(CurrentPageInput().state)
  return (

    <div className='margin-auto-0 with-80vw'>
      <>Current Page Select </>
      <CurrentPageInput/>
      <div className='grid margin-auto-0'>
        {manipulateRenderButton(jumpToPage, NumberOfPages)}
      </div>
      <br />
          <Worker workerUrl={pdfWorker} >
                <div
                  className='margin-auto-0'
                  style={{
                      // border: '14px solid rgba(0, 0, 0, 0.3)',
                      height: '95vh',
                      width: '80vw'
                  }}
              >
            <Viewer
              fileUrl={params.pdf}
              plugins={[defaultLayoutPluginInstance, pageNavigationPluginInstance]}
            />
            </div>
        </Worker >
 
    </div>


  );
}
