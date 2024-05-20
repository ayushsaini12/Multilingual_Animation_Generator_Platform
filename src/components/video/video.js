import './video.css';
import videoFile1 from './show1.mp4';
import videoFile2 from './show2.mp4';
import ReactPlayer from 'react-player'

import outPutVideo from "../../output/output.mp4"


export function Video (params) {

  const videoUr1 = videoFile1
  const videoUr2 = videoFile2
  const videoUr3 = outPutVideo
  var showControls = false;

  const loading =  params.loading;

  function video() {
    if (loading === "initial") {
      showControls = false
      return videoUr2
    } else if (loading === "video") {
      showControls = false
      return videoUr1
    }
    else{
      showControls = true
      return videoUr3
    }
  }

  return (
    <div className="video-container">
       <ReactPlayer url={video()}
        controls={showControls}
        playing={true}
        loop = {true}
        width='100%'
        height='auto'  />
    </div>
  );
};