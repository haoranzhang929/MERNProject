const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errs = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errs.school = "School filed is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errs.degree = "Degree filed is required";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errs.fieldofstudy = "Field of study filed is required";
  }

  if (Validator.isEmpty(data.from)) {
    errs.from = "From date filed is required";
  }

  return {
    errs,
    isValid: isEmpty(errs)
  };
};
