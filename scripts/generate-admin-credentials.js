import bcrypt from "bcryptjs";
import crypto from "crypto";

// Generate a secure session secret
const sessionSecret = crypto.randomBytes(32).toString("hex");

// Set admin credentials
const username = "admin";
const password = process.argv[2];

if (!password) {
  console.error("\nPlease provide a password as a command line argument:");
  console.error(
    'node scripts/generate-admin-credentials.js "your-secure-password"\n'
  );
  process.exit(1);
}

// Generate password hash
bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error("Error generating hash:", err);
    process.exit(1);
  }

  console.log("\nAdd these values to your .env file:\n");
  console.log(`SESSION_SECRET=${sessionSecret}`);
  console.log(`ADMIN_USERNAME=${username}`);
  console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
});
