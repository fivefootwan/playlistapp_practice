import React from 'react';
import { generateCodeChallenge, generateRandomString } from '../spotifyAuth';

const clientId = "f00ce91fd41a4e41940a68a04e277a19"; //this is gen from having a dev acc on spotify
const redirectUri = "https://playlistapp-practice.vercel.app/callback";
const scope = "playlist-modify-public playlist-modify-private";

async function redirectToSpotifyAuth() {
  const codeVerifier = generateRandomString(128);
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  localStorage.setItem("code_verifier", codeVerifier);

  const state = generateRandomString(16);

  const args = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: "S256",
    code_challenge: codeChallenge
  });

  window.location = `https://accounts.spotify.com/authorize?${args.toString()}`;
}

export default function SpotifyLogin() {
  return (
    <button onClick={redirectToSpotifyAuth}>
      Connect to Spotify
    </button>
  );
}
