const { Loan, FarmerProfile } = require("../models");
const { assessLoan } = require("./ai.service");

exports.createLoan = async (authId, data) => {

  const farmer = await FarmerProfile.findOne({
    where: { auth_id: authId }
  });

  if (!farmer) {
    throw new Error("Farmer profile not found");
  }

  let aiResult = null;

  try {
    aiResult = await assessLoan(data);
  } catch (err) {
    console.error("AI SERVICE ERROR:", err.message);
  }

  const loan = await Loan.create({

    user_id: farmer.id,
    status: "draft",

    age: data.age,
    education_level: data.education_level,
    years_farming: data.years_farming,
    farm_size: data.farm_size,
    crop_type: data.crop_type,
    irrigation_access: data.irrigation_access,
    market_distance_km: data.market_distance_km,
    annual_income: data.annual_income,
    savings: data.savings,
    mobile_money: data.mobile_money,
    coop_member: data.coop_member,
    previous_repayment: data.previous_repayment,

    loan_amount: data.loan_amount,
    purpose: data.purpose,
    repayment_period_months: data.repayment_period_months,
    expected_income_increase: data.expected_income_increase,
    expected_loss_reduction: data.expected_loss_reduction,
    first_time_borrower: data.first_time_borrower,
    ai_prediction: aiResult?.ml_prediction || null,
    repay_probability: aiResult?.repay_probability || null,
    rule_score: aiResult?.rule_score || null,
    risk_level: aiResult?.risk_level || null,
    ai_recommendation:
      aiResult?.recommendation ||
      aiResult?.ai_recommendation ||
      "AI assessment pending",
    ai_action: aiResult?.action || aiResult?.ai_action || "review"
      });

  return loan;
};

exports.getUserLoans = async (authId) => {

  const farmer = await FarmerProfile.findOne({
    where: { auth_id: authId }
  });

  return Loan.findAll({
   where: { user_id: farmer.id },
   
    order: [["created_at", "DESC"]]
  });
};

exports.submitLoan = async (loanId, authId) => {

  const farmer = await FarmerProfile.findOne({
    where: { auth_id: authId }
  });

  const loan = await Loan.findOne({
   where: { id: loanId, user_id: farmer.id }
  });

  if (!loan) {
    throw new Error("Loan not found");
  }

  await loan.update({
    status: "submitted",
    submitted_at: new Date()
  });

  return loan;
};

exports.approveLoan = async (id) => {

  const loan = await Loan.findByPk(id);

  await loan.update({
    status: "approved",
    approved_at: new Date()
  });

  return loan;
};

exports.rejectLoan = async (id) => {

  const loan = await Loan.findByPk(id);

  await loan.update({
    status: "rejected"
  });

  return loan;
};

exports.disburseLoan = async (id) => {

  const loan = await Loan.findByPk(id);

  await loan.update({
    status: "disbursed",
    disbursed_at: new Date()
  });

  return loan;
};