const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // changed order of validation because if Email is empty both of these
  // will be true and the last one is the one that will output.
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    // errors is an object not a string, this must have to do with including different error keys to make for better error reporting, hence why the need for turning the isEmpty(str) into a isEmpty({object}). isValid returns true if isEmpty returns true (or any errors passed in our validation)
    isValid: isEmpty(errors)
  };
};
