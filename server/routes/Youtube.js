const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

router.get('/', async (req, res) => {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const stats = response.data.items[0].statistics;

    res.json({
      subscribers: parseInt(stats.subscriberCount),
      views: parseInt(stats.viewCount),
      videos: parseInt(stats.videoCount),
    });
  } catch (err) {
    console.error("YouTube API error:", err.response?.data || err.message);
    res.status(500).json({ error: "Failed to fetch YouTube stats" });
  }
});

module.exports = router;
