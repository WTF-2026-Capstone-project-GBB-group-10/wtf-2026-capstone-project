const { z } = require("zod");

const uuid = z.string().uuid("Invalid UUID");

const phoneNumber = z.string().min(6).max(20);

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD");

const signupSchema = z.object({
  email: z.string().email("Invalid email")
});

const tokenSchema = z.object({
  email: z.string().email(),
  token: z.string().min(4)
});

// const enterPasswordSchema = z.object({
//   email: z.string().email(),
//   password: z.string().min(6, "Password must be at least 6 characters"),
//   confirmPassword: z.string().min(6)
// });

const enterPasswordSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

  const basicDetailsSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  gender: z.enum(["male", "female"]),
  country: z.string().min(2),
  city: z.string().min(2),
  role: z.enum(["admin", "farmer", "customer"]).optional()
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});



const createLoanSchema = z.object({
  age: z.coerce.number().int().positive(),
  education_level: z.coerce.number().int().min(0),
  years_farming: z.coerce.number().int().min(0),
  farm_size: z.coerce.number().positive(),
  crop_type: z.string().min(1),
  irrigation_access: z.boolean(),
  market_distance_km: z.coerce.number().positive(),
  annual_income: z.coerce.number().positive(),
  savings: z.coerce.number().min(0),
  mobile_money: z.boolean(),
  coop_member: z.boolean(),
  previous_repayment: z.boolean(),
  loan_amount: z.coerce.number().positive(),
  interest_rate: z.coerce.number().min(0).max(100).optional(),
  first_time_borrower: z.boolean().optional(),
  expected_income_increase: z.coerce.number().optional(),
  expected_loss_reduction: z.coerce.number().optional(),
  purpose: z.string().optional(),
  repayment_period_months: z.coerce.number().int().positive().optional(),
  disbursement_date: dateString.optional(),
  due_date: dateString.optional()
});

const updateLoanStatusSchema = z.object({
  status: z.enum([
    "draft",
    "submitted",
    "approved",
    "rejected",
    "disbursed"
  ])
});

const createRepaymentSchema = z.object({
  loan_id: uuid,
  amount_paid: z.number().positive(),
  payment_method: z.enum([
    "mobile_money",
    "bank_transfer",
    "cash"
  ]).optional(),
  payment_date: dateString.optional()
});

const createCreditScoreSchema = z.object({
  farmer_profile_id: uuid,
  score_value: z.number().min(0).max(100),
  risk_level: z.enum(["low", "medium", "high"]),
  satellite_score: z.number().optional(),
  climate_risk_score: z.number().optional(),
  mobile_money_score: z.number().optional()
});


const createListingSchema = z.object({
  crop_type: z.string().min(2),
  quantity: z.number().positive(),
  price: z.number().positive(),
  location: z.string().min(2)
});


const createMessageSchema = z.object({
  receiver_id: uuid,
  listing_id: uuid.optional(),
  message_text: z.string().min(1)
});


const kycSchema = z.object({
  id_type: z.enum([
    "national_id",
    "voter_card",
    "passport"
  ]),
  id_number: z.string().min(5),
  phone_number: phoneNumber
});

const ussdRequestSchema = z.object({
  sessionId: z.string(),
  phoneNumber,
  text: z.string()
});



module.exports = {
  signupSchema,
  tokenSchema,
  enterPasswordSchema,
  loginSchema,
  basicDetailsSchema,
  createLoanSchema,
  updateLoanStatusSchema,
  createRepaymentSchema,
  createCreditScoreSchema,
  createListingSchema,
  createMessageSchema,
  kycSchema,
  ussdRequestSchema
};