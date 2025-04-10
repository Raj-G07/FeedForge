import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import LoginwithGoogle from '../controllers/user.js';

const GoogleProvider = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/api/v1/auth/google/callback"
  },
 async function (accessToken, refreshToken, profile, cb) {
    await LoginwithGoogle(profile,cb)
  } 
);

export { GoogleProvider };
