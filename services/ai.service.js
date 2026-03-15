const axios = require("axios");

const AI_URL = process.env.AI_SERVICE_URL || "http://localhost:8000";

exports.assessLoan = async (loanData) => {
  try {

    const response = await axios.post(
      `${AI_URL}/full-assessment`,
      loanData,
      {
        timeout: 5000,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;

  } catch (error) {

    console.error("AI SERVICE ERROR");

    if (error.response) {
      console.error("AI response error:", error.response.data);
    } 
    else if (error.request) {
      console.error("AI service unreachable. Is Python running?");
    } 
    else {
      console.error(error.message);
    }

   
    return {
      ai_prediction: "unknown",
      repay_probability: 0.5,
      risk_level: "medium",
      ai_action: "review",
      ai_recommendation: "AI unavailable. Manual review required."
    };
  }
};