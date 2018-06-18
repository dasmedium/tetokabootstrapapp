const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }
  return {
    errors,
    // errors is an object not a string, this must have to do with including different error keys to make for better error reporting, hence why the need for turning the isEmpty(str) into a isEmpty({object}). isValid returns true if isEmpty returns true (or any errors passed in our validation)
    isValid: isEmpty(errors)
  };
};
