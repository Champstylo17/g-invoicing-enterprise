exports.calculateRiskScore = (contract) => {
  let risk = 0;
  if (contract.amount > 1000000) risk += 20;
  if (contract.durationMonths > 24) risk += 30;
  if (contract.pastIssues) risk += 50;
  return Math.min(risk, 100); // Return a score between 0-100
};