const axios = require("axios");

// 🔁 Change this if you deploy later
const AI_URL = "http://localhost:8000";

exports.assessLoan = async (loanData) => {
  try {
    const response = await axios.post(
      `${AI_URL}/full-assessment`,
      loanData,
      {
        timeout: 5000, // prevent hanging requests
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(" AI SERVICE ERROR:");

    if (error.response) {
      console.error("AI response error:", error.response.data);
    } else if (error.request) {
      console.error("AI not reachable. Is Python running?");
    } else {
      console.error(error.message);
    }

    // IMPORTANT: return safe fallback
    return null;
  }
};