import './video.css';
import videoFile1 from './show1.mp4';
import videoFile2 from './show2.mp4';
import ReactPlayer from 'react-player'


export function Video () {

  const videoUr1 = videoFile1
  const videoUr2 = videoFile2
  const showControls = true;

  return (
    <div className="video-container">
       <ReactPlayer url={videoUr1}
        controls={true}
        playing={true}
        width='100%'
        height='auto'  />
      {/* <ReactPlayer
        url={videoUr1}
        controls={showControls}
        playing={true}
        width="100%"
        height="auto"
        config={{
          file: {
            attributes: {
              controlsList: showControls ? 'nodownload' : 'nodownload nopause',
              style: {
                borderRadius: '10px',
              },
            },
          },
        }}
        loop={!showControls}
      />
      {showControls && (
        <button className="export-button">
          Download
        </button>
      )} */}
      {/* <ReactPlayer url={videoUr2}
        controls={true}
        playing={true}
        width='100%'
        height='auto'  /> */}


    </div>
  );
};