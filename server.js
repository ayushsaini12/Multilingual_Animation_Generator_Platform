const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
app.use(cors()); 
const apiUrl = 'https://2d89-34-91-2-239.ngrok-free.app';

app.get('/download-video', async (req, res) => {
  try {
    const response = await axios.get(`${apiUrl}/get_video`, {
      responseType: 'stream',
    });

    const videoPath = path.join(`${__dirname}/src/output/`, 'output.mp4');
    const writer = fs.createWriteStream(videoPath);

    // res.status(200).send('Video file downloaded and saved successfully');

    response.data.pipe(writer);

    writer.on('finish', () => {
      console.log('Video file downloaded successfully');
      res.status(200).send('Video file downloaded and saved successfully');
    });

    writer.on('error', (err) => {
      console.error('Error writing video file:', err);
      res.status(500).send('Error downloading and saving the video file');
    });
  } catch (error) {
    console.error('Error getting video file:', error.message);
    res.status(500).send('Error downloading the video file');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});