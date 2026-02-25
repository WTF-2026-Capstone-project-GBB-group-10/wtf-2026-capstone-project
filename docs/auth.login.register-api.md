<!-- This document contains the authentication API documentation for the GBB.

It allows frontend developers to:

Register users

Login users

Receive JWT tokens -->

<!--BASE URL

http://localhost:5000/api/v1

AUTHENTICATION

POST /api/v1/auth/signup

HEADER
Content-Type: application/json

REQUEST BODY
{
  "email": "amina.yusuf@ggb.com",
  "password": "AminaSecure123!"
}


LOGIN USER
ENDPOINT 
POST /api/v1/auth/login

{
  "email": "amina.yusuf@ggb.com",
  "password": "AminaSecure123!"
}

Success Response (200)
{
  "token": "JWT_TOKEN"
}
Authorization: Bearer JWT_TOKEN
Example
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...


Other part will follow soon

-->
