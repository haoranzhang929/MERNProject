const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errs = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errs.name = "Name must be between 2 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errs.name = "Name filed is required!";
  }

  if (Validator.isEmpty(data.email)) {
    errs.email = "Email filed is required!";
  }

  if (!Validator.isEmail(data.email)) {
    errs.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errs.password = "Password filed is required!";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errs.password = "Password must be at least 6 characters!";
  }

  if (Validator.isEmpty(data.password2)) {
    errs.password2 = "Confirm Password filed is required!";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errs.password2 = "Passwords must match!";
  }

  return {
    errs,
    isValid: isEmpty(errs)
  };
};
