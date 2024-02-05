
import './index.css'
import { useState } from 'react'
import { PdfViewer } from './pdfComponent/PdfViewer'
import { CountElement } from './lectionUseEffect/lectionUseEffectCallback'

export function App() {

  const [ testComponent, setTestComponents ] = useState('PdfViewer')
  const pdf = "./assets/pdf.pdf"
  return (
    <>
      {testComponent === 'PdfViewer' && <PdfViewer pdf={pdf}/>}
      {testComponent === 'CountElement' && <CountElement/>}
    </>
  )
}
  