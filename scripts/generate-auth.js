const bcrypt = require("bcryptjs");
const crypto = require("crypto");

// Generate a secure random session secret
const sessionSecret = crypto.randomBytes(32).toString("hex");

// Generate password hash
const password = process.argv[2]; // Get password from command line
if (!password) {
  console.error("Please provide a password as a command line argument");
  process.exit(1);
}

// Generate salt and hash
bcrypt.genSalt(10, function (err, salt) {
  bcrypt.hash(password, salt, function (err, hash) {
    console.log("\nAdd these values to your .env file:\n");
    console.log(`SESSION_SECRET=${sessionSecret}`);
    console.log(`ADMIN_USERNAME=admin`); // You can change this username
    console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  });
});
