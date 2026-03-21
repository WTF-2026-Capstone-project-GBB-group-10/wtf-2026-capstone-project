module.exports = (schema) => (req, res, next) => {

  console.log("BODY RECEIVED:", req.body);

  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.issues.map(
        (issue) => `${issue.path.join(".")} : ${issue.message}`
      )
    });
  }

  req.validatedData = result.data;

  next();
};