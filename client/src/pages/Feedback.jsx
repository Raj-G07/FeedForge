
import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import Header from "../components/Header";
const FeedbackHub = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header/>
      <FeedbackForm />
    </div>
  );
};

export default FeedbackHub;
