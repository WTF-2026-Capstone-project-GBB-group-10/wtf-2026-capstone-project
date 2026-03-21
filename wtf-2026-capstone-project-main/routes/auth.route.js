const router = require("express").Router();

const authController = require("../controllers/auth.controller");
const catchAsync = require("../utils/catchAsync");
const validateRequest =  require('../middleware/validate')

// const {
//   signupSchema,
//   tokenSchema,
//   passwordSchema,
//   basicDetailsSchema,
//   loginSchema
// } = require("../validators/validateData");
const {
  signupSchema,
  tokenSchema,
  enterPasswordSchema,
  basicDetailsSchema,
  loginSchema
} = require("../validators/validateData");


router.post("/signup",
  validateRequest(signupSchema),
  catchAsync(authController.signup)
);

router.post("/token",
  validateRequest(tokenSchema),
  catchAsync(authController.verifyToken)
);

// router.post("/enterPassword",
//   validateRequest(passwordSchema),
//   catchAsync(authController.enterPassword)
// );
router.post(
  "/enterPassword",
  validateRequest(enterPasswordSchema),
  catchAsync(authController.enterPassword)
);

router.post("/basicDetails",
  validateRequest(basicDetailsSchema),
  catchAsync(authController.basicDetails)
);

router.post("/success",
  catchAsync(authController.success)
);

router.post("/forgot",
  catchAsync(authController.forgotPassword)
);

router.post("/token2",
  catchAsync(authController.verifyToken)
);

router.post("/set",
  catchAsync(authController.enterPassword)
);

router.post("/login",
  validateRequest(loginSchema),
  catchAsync(authController.login)
);

router.post("/home",
  catchAsync(authController.home)
);

module.exports = router;