import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  email: { type: String, required: true },
  product: { type: String, required: true },
  duration: { type: String, required: true },

  featureRating: { type: String, enum: ["Excellent", "Good", "Average", "Poor"] },
  favoriteFeature: { type: String },
  featureSuggestion: { type: String },

  pricingRating: { type: String, enum: ["Excellent value", "Good value", "Fair value", "Overpriced"] },
  pricingComment: { type: String },

  usabilityRating: { type: String, enum: ["Very easy", "Easy", "Moderate", "Difficult"] },
  usabilityComment: { type: String },

  additionalComment: { type: String },
}, { timestamps: true });

export const Product = mongoose.model("Product",feedbackSchema);
