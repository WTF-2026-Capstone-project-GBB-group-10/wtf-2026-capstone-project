<!-- 

POST
sign-up
http://localhost:5000/api/v1/auth/signup

Body
raw (json)
json
{
  "email": "successful@gmail.com"
}
POST
Token
http://localhost:5000/api/v1/auth/token
﻿

Body
raw (json)
json
{
  "email": "successful@gmail.com",
  "token": "289786"
}
POST
password
http://localhost:5000 /api/v1/auth/enterPassword
﻿

Body
raw (json)
json
{
  "email": "successful@gmail.com",
  "password": "StrongPassword123",
  "confirmPassword": "StrongPassword123"
}
POST
forgot password
http://localhost:5000/api/v1/auth/forgot
﻿

Body
raw (json)
json
 {
      "email": "successful@gmail.com"

 }
POST
Basic details
http://localhost:5000/api/v1/auth/basicDetails
﻿

Body
raw (json)
json
{
  "email": "successful@gmail.com",
  "firstName": "Chisom",
  "lastName": "Okafor",
  "gender": "male",
  "country": "Nigeria",
  "city": "Lagos",
  "role": "farmer"
}
POST
sign-in
http://localhost:5000/api/v1/auth/login
﻿

Body
raw (json)
json
{
  "email": "successful@gmail.com",
  "password": "StrongPassword123"
}
POST
Welcome page
http://localhost:5000 /api/v1/auth/home
﻿

Body
raw (json)
json
{
  "message": "Welcome to homepage"
}
POST
Admin
http://localhost:5000/api/v1/auth/signup
﻿

Body
raw (json)
json
{
  "email": "admin@agrifintech.com"
}
POST
Admin token/verification
http://localhost:5000 /api/v1/auth/token
﻿

Body
raw (json)
json
{
    "email": "admin@agrifintech.com",
    "token": "735790"
}
POST
Admin-password
http://localhost:5000 /api/v1/auth/enterPassword
﻿

Body
raw (json)
json
{
  "email": "admin@agrifintech.com",
  "password": "AdminStrong123",
  "confirmPassword": "AdminStrong123"
}
POST
Admin-basicProfile
://localhost:5000 /api/v1/auth/basicDetails
﻿

Body
raw (json)
json
{
  "email": "admin@agrifintech.com",
  "firstName": "Chisom",
  "lastName": "Okafor",
  "gender": "male",
  "country": "Nigeria",
  "city": "Lagos",
  "role": "farmer"
}
GET
Admin login


Loan Request


POST
create loan
http://localhost:5000/api/v1/loans


Authorization
Bearer Token
Token

Body
raw (json)
View More
json
{
  "age": 35,
  "education_level": 2,
  "years_farming": 10,
  "farm_size": 5.5,
  "crop_type": "maize",
  "irrigation_access": true,
  "market_distance_km": 12,
  "annual_income": 20000,
  "savings": 5000,
  "mobile_money": true,
  "coop_member": true,
  "previous_repayment": true,
  "loan_amount": 50000,
  "interest_rate": 10,
  "first_time_borrower": false,
  "expected_income_increase": 15000,
  "expected_loss_reduction": 5000,
  "purpose": "Purchase fertilizer",
  "repayment_period_months": 12,
  "disbursement_date": "2026-04-01",
  "due_date": "2027-04-01"
}
GET
getMy-loan
http://localhost:5000/api/v1/loans/my


Authorization
Bearer Token
Token

POST
submit/approve loan
http://localhost:5000/api/v1/loans/43649b00-3539-49ba-9e78-e5f0d95ba6c8/submit
﻿

Authorization
Bearer Token
Token

Body
raw (text)
GET
loan rejection
﻿

JUMP TO
Introduction
Auth
Loan Request
 -->
