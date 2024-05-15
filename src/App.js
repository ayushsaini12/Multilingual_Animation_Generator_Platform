import './App.css';
import { Card } from './components/card/Card';
// import HighlightsCard from './components/card/Card';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className='container'>
    <div className="main">
      <Header/>
      <Hero />

      <div className='extraText'>
        <p>Storytelling is the most powerful way</p>
        <p> to put ideas into the world today.</p>
      </div>

      <div className='extraText'> Highlights</div>

      <div className='highlightsCard'>
        {/* <HighlightsCard title = {"MultiLingual Support"} description = {"Multiple language support like Hindi, English and Punjabi. In audio as well as Story input"}/> */}
        <Card  title = {"MultiLingual Support"} description = {"Multiple language support like Hindi, English and Punjabi. In audio as well as Story input"}/>
        <Card  title = {"MultiLingual Support"} description = {"Multiple language support like Hindi, English and Punjabi. In audio as well as Story input"}/>
        <Card  title = {"MultiLingual Support"} description = {"Multiple language support like Hindi, English and Punjabi. In audio as well as Story input"} />
      </div>
    </div>
    </div>
  );
}

export default App;
