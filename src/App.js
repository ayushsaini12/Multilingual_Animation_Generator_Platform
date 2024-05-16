import { cilAlignCenter } from '@coreui/icons';
import './App.css';
import { Card } from './components/card/Card';
import { Generate } from './components/generate/Generate';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import axios from 'axios';
import { Video } from './components/video/video';
import { useState } from 'react';
const cors = require('cors');


function App() {

  const [story, setStory] = useState("");
  const [lang, setLang] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [loading, setLoading] = useState(false);

  function checkValue() {
    console.log(story)
    console.log(lang)
    console.log(height)
    console.log(width)
    console.log(speaker)
    
  }

  let videoPath;


  const apiUrl = 'https://1ee6-35-196-241-212.ngrok-free.app';


  async function getVideoFile() {
    try {
      const response = await axios.get(`${apiUrl}/get_video`, {
        responseType: 'stream',
      });
      const fs = require('fs');
      const videoPath = 'output.mp4';
      const writer = fs.createWriteStream(videoPath);
  
      response.data.pipe(writer);
  
      writer.on('finish', () => {
        console.log('Video file downloaded successfully');
      });
  
      writer.on('error', (err) => {
        console.error('Error writing video file:', err);
      });
    } catch (error) {
      console.error('Error getting video file:', error.message);
    }
  }

  async function generateVideo(story, language, speaker, height, width) {
    try {
      console.log({story, language, speaker, height, width})
      const response = await axios.post(`${apiUrl}/generate_video`, {
        story,
        language,
        speaker,
        height,
        width,
      });
  
      console.log(response.data); // "Animation generation started in the background."
    } catch (error) {
      console.error('Error generating video:', error.message);
    }
  }

  return (
    <div className='container'>
      <div className="main">
        <Header />
        <Hero />
        <div className='cardbox'>
          <div className='extraText'>Key Highlights</div>
        </div>
        <div className='highlightsCard'>
          <Card
            icon="speech-bubble"
            title="Write Once, Speak Many"
            description="Stories in English, Hindi, Punjabi & More!"
          />
          <Card
            icon="globe"
            title="Global Reach, Local Touch"
            description="Videos Made for a Worldwide Audience."
          />
          <Card
            icon="lightbulb"
            title="Idea to Video in Minutes"
            description="Problem Sol Saves You Time & Effort."
          />
        </div>
        <div className='highlightsCard'>
          <Card
            icon="mic"
            title="Choose Your Voice"
            description="Male or Female Narrator for Your Video."
          />
          <Card
            icon="monitor"
            title="Tailor Your Canvas"
            description="Select Portrait or Landscape Video Format."
          />
          <Card
            icon="checkmark"
            title="Your Story, Your Way"
            description="Preview & Download Your Video in 10 Minutes."
          />
        </div>
         <div className='quote'>
            <p>  “ Stop dreaming, Start creating & Turn your imagination into reality ” </p>
          </div>
        <Generate data = {{story, lang, height,width,speaker} } setStory = {setStory} setLang = {setLang} setHeight = {setHeight} setWidth = {setWidth} setSpeaker = {setSpeaker} setLoading = {setLoading} generateVideo = {generateVideo} />
        <Video />
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}

export default App;