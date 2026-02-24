// utils/creditScore.js

/**
 * Simple deterministic credit scoring (MVP)
 * Based on loan amount only
 * Matches your Week 2 requirements
 */

function generateCreditScore(amount) {
  if (amount < 1000) return 80;
  if (amount < 5000) return 60;
  return 40;
}

module.exports = generateCreditScore;