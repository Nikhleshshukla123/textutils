import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); // This line will cause an error because setText is not a function here (correct way to update state)
        setText(newText); // This line will cause an error because setText is not a function here (correct way to update state)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase(); // This line will cause an error because setText is not a function here (correct way to update state)
        setText(newText); // This line will cause an error because setText is not a function here (correct way to update state)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value); // This line will cause an error because setText is not a function here (correct way to update state)
    }

    const [text, setText] = useState('');
    // text = "new text";  // This line is not needed as it will not update the state  (wrong way to update state)
    // setText("New text"); // This line will cause an error because setText is not a function here (correct way to update state)
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>

        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}
