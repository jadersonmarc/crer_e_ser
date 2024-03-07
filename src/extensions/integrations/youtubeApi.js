const { google } = require('googleapis');
const { authenticateWithGoogle } = require('./googleAuth');

async function getYouTubeVideos() {
  try {
    const auth = await authenticateWithGoogle();
    const youtube = google.youtube({ version: 'v3', auth });

    const response = await youtube.videos.list({
      part: 'snippet',
      chart: 'mostPopular',
      regionCode: 'US',
    });

    const videos = response.data.items;
    return videos;
  } catch (error) {
    console.error('Erro ao obter vídeos do YouTube:', error);
    throw error;
  }
}

module.exports = {
  getYouTubeVideos,
};

