import React, { useState } from 'react';
import { UisStar } from '@iconscout/react-unicons-solid';
import "./generate.css";

export function Generate(params) {
  const [textareaValue, setTextareaValue] = useState('');

  const setStory = params.setStory;
  const setLang = params.setLang;
  const setHeight = params.setHeight;
  const setWidth = params.setWidth;
  const setSpeaker = params.setSpeaker;
  const setLoading = params.setLoading;
  const generateVideo = params.generateVideo;
  // console.log(params)

  const handleTextareaChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;
    setStory(value);
    if (wordCount <= 300) {
      setTextareaValue(value);
    }
  };

  const langChange =(e) =>{
    setLang(e.target.value)
  }

  const orinChange =(e) =>{
    if (e.target.value === "Horizontal [9:16]") {
      setHeight(648);
      setWidth(1344)
    }
    else{
      setHeight(648);
      setWidth(1344)
    }
  }

  const speakerChange = (e) =>{
    setSpeaker(e.target.value)
  }

  function genVideo(){
    setLoading(true);
    generateVideo();
    setLoading(true);
  }

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
        <select onChange={langChange}>
          <option>Select Language</option>
          <option>Hindi</option>
          <option>English</option>
        </select>
        <select onChange={orinChange}>
          <option>Select Orientation</option>
          <option>Horizontal [9:16]</option>
          <option>Vertical [16:9]</option>
        </select>
        <select onChange={speakerChange}>
          <option>Select Speaker</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <hr />

      <div className="button-container">
        <button className="generate-button" onClick={genVideo}>
          Generate
        </button>
      </div>

    </div>
    
  );
}   