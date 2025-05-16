import React, { useEffect } from 'react';

const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
const redirectUri = 'https://playlistapp-practice.vercel.app/callback';

function Callback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const codeVerifier = localStorage.getItem('code_verifier');

    if (!code) {
      console.error("No code found in URL");
      return;
    }

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier
    });

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body
    })
      .then(res => res.json())
      .then(data => {
        console.log("🎟 Access Token: ", data.access_token);
        localStorage.setItem("access_token", data.access_token);
        // Optionally redirect to home
        window.location.href = '/';
      })
      .catch(err => {
        console.error("Error getting token", err);
      });
  }, []);

  return <p>Logging you in...</p>;
}

export default Callback;
