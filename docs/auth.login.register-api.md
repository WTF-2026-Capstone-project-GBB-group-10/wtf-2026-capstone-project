<!-- This document contains the authentication API documentation for the GBB.

It allows frontend developers to:

Register users

Login users

Receive JWT tokens -->

<!--BASE URL

http://localhost:5000/api/v1

AUTHENTICATION

POST http://localhost:5000/api/v1/auth/signup

HEADER
Content-Type: application/json

REQUEST BODY
{
  "email": "grace.njeri@ggb.com",
  "password": "GraceSecure123!"
}


LOGIN USER
ENDPOINT 
POST http://localhost:5000/api/v1/auth/login

{
  "email": "grace.njeri@ggb.com",
  "password": "GraceSecure123!"
}

Success Response (200)
{
  "token": "JWT_TOKEN"
}
Authorization: Bearer JWT_TOKEN
Example
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...


ONBOARDING DASHBOARD
post: http://localhost:5000/api/v1/farmer/onboard


LOAN APPLICATION

GET: http://localhost:5000/api/v1/loans/my
post: http://localhost:5000/api/v1/loans

LOAN SUBMITTION
POST: http://localhost:5000/api/v1/loans/ID/submit


Other part will follow soon

-->
