import React, { useState } from 'react';
import './WordCounter.css';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  };

  return (
    <div>

      <div className='base'>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Number of words: {countWords()}</p>
      </div>

    </div>
  );
}

export default WordCounter;


