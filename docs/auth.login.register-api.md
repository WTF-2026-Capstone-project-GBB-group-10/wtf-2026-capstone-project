<!-- This document contains the authentication API documentation for the AgriFinTech platform.

It allows frontend developers to:

Register users

Login users

Receive JWT tokens -->

<!--BASE URL

http://localhost:5000/api/v1

AUTHENTICATION

POST /auth/register

HEADER
Content-Type: application/json

REQUEST BODY
{
  "email": "amina.yusuf@ggb.com",
  "password": "AminaSecure123!"
}


LOGIN USER
ENDPOINT 
POST /auth/login

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
