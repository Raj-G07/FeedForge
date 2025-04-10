import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import LoginwithGoogle from '../controllers/user.js';
const GoogleProvider = new GoogleStrategy(
  {
    clientID: "62665677273-fus4c08avff4vqas63icsa1sr91t30j1.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/api/v1/auth/google/callback"
  },
 async function (accessToken, refreshToken, profile, cb) {
    await LoginwithGoogle(profile,cb)
  } 
);

export { GoogleProvider };
