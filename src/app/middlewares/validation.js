const Joi = require("joi");

function validate(schema) {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        uuAppErrorMap: {
          errorType: "ValidationError",
          message: error.details[0].message,
        },
        dtoIn: req.body,
      });
    }
    req.validatedData = value;
    next();
  };
}

module.exports = validate;