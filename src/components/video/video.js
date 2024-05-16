import './video.css';
import videoFile from './ai.mp4';
import ReactPlayer from 'react-player'


export function Video () {

  const videoUrl = videoFile

  return (
    <div className="video-container">
      <ReactPlayer url={videoUrl}
        controls={true}
        playing={true}
        width='100%'
        height='auto'  />

    </div>
  );
};