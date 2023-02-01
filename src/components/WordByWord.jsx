import React, { useState } from 'react';


//form
//input
//button
//state mgt
//timing (timeout???)
//output displayed 1 word at a time

const WordByWord = () => {
    //set up initial state for each variable/prop
    // const [input, setInput] = useState([]);
    const [word, setWord] = useState([]);
    const [text, setText] = useState([]);

    //onSubmit function for button
    const handleSubmit = (event) => {
        //convert string to an array called splitText
        const splitText = text.split(' ');
        recursiveDisplay(splitText);
    };

    const recursiveDisplay = (words) => {
        if (words.length) {
            setTimeout(() => {
                setWord(words.shift());
                recursiveDisplay(words);
            }, 1000);
        }
    };

    return (
        <>
            <form>
                <input type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <button type="button" onClick={() => handleSubmit()}>Submit</button>
            </form>

            <div >
                <h1>{word}</h1>
            </div>
        </>
    );
};

export default WordByWord;