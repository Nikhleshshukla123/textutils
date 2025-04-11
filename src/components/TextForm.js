import React, { useState } from 'react';

/**
 * A functional component that renders a text form with various text manipulation options.
 *
 * @param {object} props - The component's props.
 * @param {string} props.heading - The heading of the text form.
 * @returns {JSX.Element} The text form component.
 */
export default function TextForm({ heading }) {
  const [text, setText] = useState('');

  // Handlers
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
    const newText = text.split(/\s+/).join(' ');
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // Word count & reading time
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const readTime = (wordCount * 0.008).toFixed(2); // ~125 wpm

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold mb-4">{heading}</h2>

      {/* Textarea Box */}
      <div className="mb-4">
        <textarea
          className="form-control shadow-sm border border-primary rounded"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          placeholder="Start typing or paste your text here..."
          style={{ resize: 'none' }}
        />
      </div>

      {/* Button Controls */}
      <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
        <button
          disabled={text.length === 0}
          className="btn btn-primary shadow"
          onClick={handleUpClick}
        >
          🔠 Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary shadow"
          onClick={handleLoClick}
        >
          🔡 Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-secondary shadow"
          onClick={handleExtraSpaces}
        >
          🧹 Remove Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-success shadow"
          onClick={handleCopy}
        >
          📋 Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-danger shadow"
          onClick={handleClearClick}
        >
          ❌ Clear
        </button>
      </div>

      {/* Summary Section */}
      <div className="bg-light p-4 rounded shadow-sm mb-4">
        <h4 className="fw-semibold mb-3">📝 Text Summary</h4>
        <p>
          <strong>{wordCount}</strong> words and <strong>{charCount}</strong> characters
        </p>
        <p>Estimated Read Time: <strong>{readTime}</strong> minute(s)</p>
      </div>

      {/* Preview Section */}
      <div className="bg-white p-4 rounded shadow border">
        <h4 className="fw-semibold mb-3">🔎 Preview</h4>
        <p style={{ whiteSpace: 'pre-wrap' }}>
          {text.length > 0 ? (
            text
          ) : (
            <em className="text-muted">Nothing to preview! Enter some text above 👆</em>
          )}
        </p>
      </div>
    </div>
  );
}