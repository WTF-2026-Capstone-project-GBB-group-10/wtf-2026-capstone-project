const { z } = require('zod');

const uuid = z.string().uuid('Invalid UUID');
const phoneNumber = z.string().min(6).max(20);

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD');

const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const updateUserSchema = z.object({
  full_name: z.string().min(2).optional(),
  role: z.enum(['user', 'admin']).optional(),
  phone: z.string().optional(),
  age: z.number().int().positive().optional(),
  gender: z.enum(['male', 'female']).optional(),
  location: z.string().optional(),
  income_bracket: z.enum([
    'bottom_40',
    'lower_middle',
    'middle',
    'high'
  ]).optional(),
  farm_size: z.number().positive().optional(),
  crop_type: z.string().optional(),
  mobile_money_number: z.string().optional()
});

const createLoanSchema = z.object({
  loan_amount: z.number().positive(),
  interest_rate: z.number().min(0).max(100).optional(),
  first_time_borrower: z.boolean().optional(),
  expected_income_increase: z.number().optional(),
  expected_loss_reduction: z.number().optional(),
  purpose: z.string().optional(),
  repayment_period_months: z.number().int().positive().optional(),
  disbursement_date: dateString.optional(),
  due_date: dateString.optional()
});

const updateLoanStatusSchema = z.object({
  status: z.enum([
    'draft',
    'submitted',
    'approved',
    'rejected',
    'disbursed'
  ])
});


const createRepaymentSchema = z.object({
  loan_id: uuid,
  amount_paid: z.number().positive(),
  payment_method: z.enum(['mobile_money', 'bank_transfer', 'cash']).optional(),
  payment_date: z.string().datetime().optional()
});


const createCreditScoreSchema = z.object({
  user_id: uuid,
  score_value: z.number().min(0).max(100),
  risk_level: z.enum(['low', 'medium', 'high']),
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
  id_type: z.enum(['national_id', 'voter_card', 'passport']),
  id_number: z.string().min(5),
  phone_number: phoneNumber
});


const ussdRequestSchema = z.object({
  sessionId: z.string(),
  phoneNumber,
  text: z.string()
});

module.exports = {
  registerSchema,
  loginSchema,
  updateUserSchema,
  createLoanSchema,
  updateLoanStatusSchema,
  createRepaymentSchema,
  createCreditScoreSchema,
  createListingSchema,
  createMessageSchema,
  kycSchema,
  ussdRequestSchema
};