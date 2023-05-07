import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const textUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert('Converted to Uppercase');
        }
    };
    const textLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text.length > 0) {
            props.showAlert('Converted to Lowercase');
        }
    };
    const capitalizeText = () => {
        let newText = text.split(' ');
        newText = newText.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
        setText(newText);
        if (text.length > 0) {
            props.showAlert('Text is capitalized');
        }
    };
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        if (text.length > 0) {
            props.showAlert('All Extra Spaces are removed');
        }
    };

    const alternateText = () => {
        let newText = text.split('');
        let alternateText = '';
        for (let index in newText) {
            if (index % 2 === 0) {
                alternateText += newText[index].toUpperCase();
            } else {
                alternateText += newText[index].toLowerCase();
            }
        }

        setText(alternateText);

        if (text.length > 0) {
            props.showAlert('Text is Alternated');
        }
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        if (text.length > 0) {
            props.showAlert('Copy to Clipboard');
        }
    };

    const textClear = () => {
        setText('');
        if (text.length > 0) {
            props.showAlert('Text Clear');
        }
    };

    const wordCount = () => {
        const word = text.split(/\s+/);
        let wordCount = word.length;
        for (let i of word) {
            if (i.length === 0) {
                wordCount--;
            }
        }
        return wordCount;
    };



    return (
        <div className='textform__content'>
            <textarea
                className={`textarea ${props.theme === 'dark' ? 'textarea-dark' : ''}`} placeholder='Enter any text'
                onChange={handleChange}
                value={text}
            ></textarea>
            <div className="button__box">
                <div className="btn" onClick={textUpperCase} >Convet to Uppercase</div>
                <div className="btn" onClick={textLowerCase}>Convet to Lowercase</div>
                <div className="btn" onClick={capitalizeText}>Capitalize text</div>
                <div className="btn" onClick={removeExtraSpaces}>Remove Extra Spaces</div>
                <div className="btn" onClick={alternateText}>Alternate Text</div>
                <div className="btn" onClick={copyText}>Copy Text</div>
                <div className="btn" onClick={textClear}>Clear Text</div>
            </div>

            <div className="text__data">
                <h3>Word{wordCount() > 1 ? 's' : ''}: <span>{wordCount()}</span></h3>
                <h3>Character{text.split('').length > 1 ? 's' : ''}: <span>{text.split('').length}</span></h3>
            </div>


            <div className="preview__box">
                <h1>Text Preview</h1>
                <div className="preview__content">
                    <p>{text.length===0?'Write any text in the text box to see preview here':text}</p>
                </div>
            </div>
        </div>
    );
}
