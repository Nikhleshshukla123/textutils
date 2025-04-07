import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase(); // This line will cause an error because setText is not a function here (correct way to update state)
        setText(newText); // This line will cause an error because setText is not a function here (correct way to update state)
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value); // This line will cause an error because setText is not a function here (correct way to update state)
    }

    const [text, setText] = useState('Enter text here...');
    // text = "new text";  // This line is not needed as it will not update the state  (wrong way to update state)
    // setText("New text"); // This line will cause an error because setText is not a function here (correct way to update state)
    return (
        <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
    </>
  )
}
