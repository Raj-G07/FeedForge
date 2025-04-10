import express from "express";
import passport from "../utils/passport.js";
import { ProfileController, VerifyToken } from "../controllers/user.js";
import { Product } from "../models/product.js";
const router = express.Router();

router.route("/login-with-google").get(passport.authenticate("google",{scope:['profile','email']}))
router.route("/google/callback").get(passport.authenticate("google",{failureRedirect:'http://localhost:8000/api/v1/auth/failed'}),async(req,res)=>
{
    const user = await req.user
    await req.logout((req,res)=>{
        console.log("Logout success")
    })
    res.redirect("http://localhost:5173/success?token="+user)
})
router.route("/dashboard").get(async (req,res) => {
    if (!req.isAuthenticated()) {
       return res.send("can not access dashboard")
    }
    res.send("<h1>Dashboard</h1>")
})
router.route("/failed").get(()=>{
    res.send("Failed to login with google")
})

router.route("/success").get((req,res)=>{
    res.send("login with google")
})
router.route("/profile")
.get(VerifyToken,ProfileController)

router.route("/product").post(async(req,res)=>{
   const { email,product,duration,featureRating, favoriteFeature,featureSuggestion,pricingRating, pricingComment,usabilityRating,usabilityComment} = req.body;
  try {
    const feedback = new Product({email,product,duration,featureRating, favoriteFeature,featureSuggestion,pricingRating, pricingComment,usabilityRating,usabilityComment});
    await feedback.save();
    res.status(201).json({ message: "Product feedback submitted successfully!", feedback });
  } catch (error) {
    res.status(400).json({ message: "Error submitting feedback", error });
  }
});





export default router;