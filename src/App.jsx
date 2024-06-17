import  QRCode  from 'qrcode'
import { useState } from 'react'
function App() {
  const [url, setUrl] = useState('')
  const [qrcode,setQrcode] = useState('')
  const GenerateQRCode = () => {
    QRCode.toDataURL(url, (err,url) => {
      if (err) return console.error(err)
      console.log(url)
      setQrcode(url)
    })
  }
  return (
    <div className="App">
      <h1>QR CODE GENERATER</h1>
        <input type="text" placeholder="e.g. https://www.google.com"
          value={url}
          onChange={(evt)=>setUrl(evt.target.value)}>
        </input>
        <button onClick={GenerateQRCode}>Generate</button>
        {qrcode && <>
        <img src={qrcode} ></img>
        </>}
        <qrcode/>
            </div>
  )
}

export default App
