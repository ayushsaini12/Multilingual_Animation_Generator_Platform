import { cilAlignCenter } from '@coreui/icons';
import './App.css';
import { Card } from './components/card/Card';
import { Generate } from './components/generate/Generate';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
// import { Video } from './components/video/video';
import axios from 'axios';

function App() {

  async function generateVideo(story, gender, language, height, width) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const body = JSON.stringify({story, gender, language, height, width });
    try {
      const result = await axios.post("url",body,config )
      return result;
    } catch (error) {
      return error;
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
        <div className='cardbox'>
          <div className='extraText'>
            <p>  “ Stop dreaming, Start creating & Turn your imagination into reality ” </p>
          </div>
        </div>
        <Generate />
      </div>
    </div>
  );
}

export default App;