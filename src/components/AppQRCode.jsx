import React, { useState } from 'react'
import QRCode from "react-qr-code";
import '../assets/styles/QRCode.css'

const AppQRCode = () => {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('');
    }
    return (
        <div>
            <h1>Qr Code Generator</h1>
            <div className='qr-input'>
                <input onChange={(e) => setInput(e.target.value)}
                    type="text"
                    name="qr-code"
                    value={input}

                    placeholder="Enter your value here"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") { handleGenerateQrCode() }
                    }}
                />
                <button className="btnGenerate" disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div className="qr-code-container">
                <QRCode
                    className="qr-code"
                    id="qr-code-value"
                    value={qrCode} size={200} bgColor="transparent" />
            </div>
        </div>
    )
}

export default AppQRCode
