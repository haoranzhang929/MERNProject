const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errs = {};

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errs.name = "Name must be between 2 and 30 characters";
  }

  return {
    errs,
    isValid: isEmpty(errs)
  };
};
