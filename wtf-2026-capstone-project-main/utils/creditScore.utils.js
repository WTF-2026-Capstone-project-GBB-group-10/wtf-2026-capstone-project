module.exports = function calculateScore(amount) {
  if (amount < 1000) return 80;
  if (amount < 5000) return 60;
  return 40;
};