const { google } = require('googleapis');

async function authenticateWithGoogle() {
  try {
    // Crie um cliente OAuth2 com as credenciais fornecidas
    const auth = new google.auth.GoogleAuth({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
    });

    return auth;
  } catch (error) {
    console.error('Erro na autenticação com o Google:', error);
    throw error;
  }
}

module.exports = {
  authenticateWithGoogle,
};
