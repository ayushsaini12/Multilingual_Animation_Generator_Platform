import './Video.css';
import videoFile from 'ai.mp4';

export const Video = () => {
  const [isVertical, setIsVertical] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleOrientation = () => {
    setIsVertical(!isVertical);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (event) => {
    const video = event.target;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleExport = () => {
    // Implement the download functionality here
    console.log('Export video');
  };

  return (
    <div className="video-container">
      <div className={`phone-frame ${isVertical ? 'vertical' : 'horizontal'}`}>
        <video
          src={videoFile}
          className="video-player"
          autoPlay={isPlaying}
          onTimeUpdate={handleProgress}
        />
        <div className="controls">
          <button onClick={handleOrientation}>
            {isVertical ? 'Horizontal' : 'Vertical'}
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgress}
          />
        </div>
      </div>
      <button className="export-button" onClick={handleExport}>
        Export
      </button>
    </div>
  );
};