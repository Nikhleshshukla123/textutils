import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container my-5 p-4 shadow rounded bg-white">
                <h1 className="mb-4 fw-bold text-center">{props.heading}</h1>
                <div className="form-floating mb-4">
                    <textarea
                        className="form-control border-primary shadow-sm"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        rows="8"
                        placeholder="Start typing or paste your text here..."
                        style={{ resize: 'none' }}
                    ></textarea>
                    <label htmlFor="myBox">Enter text to analyze</label>
                </div>

                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <button className="btn btn-outline-primary shadow" onClick={handleUpClick}>🔠 Uppercase</button>
                    <button className="btn btn-outline-primary shadow" onClick={handleLoClick}>🔡 Lowercase</button>
                    <button className="btn btn-outline-danger shadow" onClick={handleClearClick}>❌ Clear</button>
                    <button className="btn btn-outline-success shadow" onClick={handleCopy}>📋 Copy</button>
                    <button className="btn btn-outline-secondary shadow" onClick={handleExtraSpaces}>🔍 Remove Spaces</button>
                </div>
            </div>

            <div className="container my-5 p-4 bg-light rounded shadow-sm">
                <h2 className="fw-bold">📝 Text Summary</h2>
                <p><strong>{text.split(/\s+/).filter((e) => e.length !== 0).length}</strong> words and <strong>{text.length}</strong> characters</p>
                <p>Estimated Read Time: <strong>{(0.008 * text.split(/\s+/).filter((e) => e.length !== 0).length).toFixed(2)} mins</strong></p>

                <h3 className="mt-4">🔎 Preview</h3>
                <p className="border p-3 bg-white rounded">
                    {text.length > 0 ? text : "Nothing to preview! Start typing above."}
                </p>
            </div>
        </>
    );
}
