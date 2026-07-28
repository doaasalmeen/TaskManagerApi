function validate(schema, property = "body") {
  return function (req, res, next) {
    const result = schema.safeParse(req[property]);

    if (!result.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: result.error.issues,
      });
    }

    req[property] = result.data;

    next();
  };
}

export default validate;