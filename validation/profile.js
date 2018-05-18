const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errs = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errs.handle = "Handle needs to be between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.handle)) {
    errs.handle = "Profile handle is required";
  }

  if (Validator.isEmpty(data.status)) {
    errs.status = "Status field is required";
  }

  if (Validator.isEmpty(data.skills)) {
    errs.skills = "Skills field are required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errs.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errs.youtube = "Not a valid URL";
    }
  }

  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errs.twitter = "Not a valid URL";
    }
  }

  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errs.facebook = "Not a valid URL";
    }
  }

  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errs.linkedin = "Not a valid URL";
    }
  }

  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errs.instagram = "Not a valid URL";
    }
  }

  return {
    errs,
    isValid: isEmpty(errs)
  };
};
