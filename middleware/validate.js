module.exports = (schema) => (req, res, next) => {
  try {
    const result = schema.safeParse(req.body)
    console.log("BODY:", req.body);;

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues.map((e) => e.message) // ✅ FIXED
      });
    }

    req.validatedData = result.data;
    next();
  } catch (err) {
    next(err);
  }
};