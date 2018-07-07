module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};
// Might use different key files for Dev or production environments depending on different databases used.
