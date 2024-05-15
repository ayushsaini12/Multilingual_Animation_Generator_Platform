import './App.css';
import { Card } from './components/card/Card';
import { Generate } from './components/generate/Generate';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
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
      <Header/>
      <Hero />
      <div className='cardbox'>
      <div className='extraText'>
        <p>Storytelling is the most powerful way</p>
        <p> to put ideas into the world today.</p>
      </div>

      <div className='extraText'> Highlights</div>

      </div>

      <div className='highlightsCard'>
      <Card  title = {"Story Time!    "} description = {"Share your ideas in any language (Hindi, English, Punjabi)"}/>
        <Card  title = {"Make it Yours!    "} description = {"Choose video style, Pick your soundtrack, Select your narrator"}/>
        <Card  title = {"Video Magic!    "} description = {"Prob Sol turns your story into a cool video"} />
      </div>

      <div className='cardbox'>
      <div className='extraText'> 
      <p>Think bigger. With an infinitely</p>
      <p>creative partner by your side.</p>
      </div>

      </div>

      

      <Generate />

    </div>
    </div>
  );
}

export default App;
