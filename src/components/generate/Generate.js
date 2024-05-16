import React, { useState } from 'react';
import { UisStar } from '@iconscout/react-unicons-solid';
import "./generate.css";

export function Generate() {
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount <= 300) {
      setTextareaValue(value);
    }
  };

  return (
    <div className='outer'>
      <p className='headingGenerate'><UisStar size="20" color="#bd73e8" /></p>
      <p className='headingGenerate'>Drop your ideas here, we'll weave them into a video masterpiece</p>
      <div className="textarea-container">
        <textarea
          rows={10}
          cols={80}
          required
          placeholder='Start Writing...'
          style={{ border: 'none' }}
          value={textareaValue}
          onChange={handleTextareaChange}
        ></textarea>
        <div className="word-count">{textareaValue.trim().split(/\s+/).length}/250 words</div>
      </div>

      {/* Dropdown buttons */}
      <div className="dropdown-container">
        <select>
          <option>Select Language</option>
          <option>Hindi</option>
          <option>English</option>
        </select>
        <select>
          <option>Select Orientation</option>
          <option>Horizontal [9:16]</option>
          <option>Vertical [16:9]</option>
        </select>
        <select>
          <option>Select Speaker</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <hr />

      <div className="button-container">
        <button className="generate-button">
          Generate
        </button>
      </div>

    </div>
    
  );
}   