// About.js
import React from 'react';

export default function About() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm border-0">
        <div className="card-body">
          <h1 className="card-title text-primary fw-bold mb-4">About TextUtils</h1>
          <p className="card-text fs-5">
            <strong>TextUtils</strong> is a powerful utility built to help you analyze and manipulate your text efficiently.
            Whether you want to convert text to uppercase/lowercase, remove extra spaces, count words or characters, 
            or preview your content — TextUtils has got you covered!
          </p>

          <hr className="my-4" />

          <h4 className="text-secondary mb-3">Why Use TextUtils?</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">✅ Simple and intuitive interface</li>
            <li className="list-group-item">✅ Real-time text transformation</li>
            <li className="list-group-item">✅ Word and character count analysis</li>
            <li className="list-group-item">✅ Easily remove unnecessary spaces</li>
            <li className="list-group-item">✅ Works in any modern browser</li>
          </ul>

          <p className="text-muted">
            Whether you're writing code, composing documents, or cleaning up copy-paste content, TextUtils makes your text cleaner and more readable — with just a few clicks.
          </p>
        </div>
      </div>
    </div>
  );
}
