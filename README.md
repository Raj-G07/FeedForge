# 📝 FeedForge – Feedback Collection Platform

FeedForge is a full-stack feedback collection platform where users can share their experience with a product. It includes a clean UI, responsive form, thank-you page, and a backend to store data using MongoDB.

## 🚀 Features

- ✨ Responsive UI using Tailwind CSS (no UI libraries like Shadcn)
- 📋 Dynamic feedback form with radio buttons, text inputs, and selects
- ✅ Thank-you confirmation page after submission
- 📦 Backend API to POST and GET feedback entries
- 🗃️ MongoDB database integration using Mongoose

---

## 🖼️ Screenshots

| Feedback Form | Thank You Page |
|---------------|----------------|
| ![form](./screenshots/form.png) | ![thank-you](./screenshots/thankyou.png) |

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- React Router DOM

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Body-parser

---

## 🧠 How It Works

1. User lands on the homepage with a welcome message.
2. They click “Get Started” to fill out the feedback form.
3. Form collects data like name, email, product used, rating, usability, and suggestions.
4. On submit, data is sent to the backend and stored in MongoDB.
5. User is redirected to a thank-you page for confirmation.

---
## 🧪 API Endpoints

### ➕ POST Feedback
http
POST /api/feedback
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "product": "Product A",
  "duration": "1-6 months",
  "featuresRating": "Good",
  "favoriteFeature": "Ease of use",
  "featureSuggestions": "Add dark mode",
  "pricingRating": "Fair value",
  "pricingFeedback": "Could be cheaper",
  "usabilityRating": "Easy",
  "usabilitySuggestions": "Improve mobile view",
  "additionalComments": "Great overall!"
}

1. Clone the repository
   git clone https://github.com/yourusername/feedforge.git
   cd feedforge
2. Start the Backend
   cd server
   npm install
   npm run dev
3. Start the Frontend
   cd client
   npm install
   npm start
   
🤝 Contribution
Contributions, issues, and suggestions are welcome! Feel free to open a pull request.



