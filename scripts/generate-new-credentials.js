import bcrypt from "bcryptjs";
import crypto from "crypto";

const username = "admin";
const password = "admin123!";

// Generate a secure random session secret
const sessionSecret = crypto.randomBytes(32).toString("hex");

// Generate salt and hash
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password, salt);

console.log("\nAdd these values to your .env file:\n");
console.log(`SESSION_SECRET=${sessionSecret}`);
console.log(`ADMIN_USERNAME=${username}`);
console.log(`ADMIN_PASSWORD_HASH="${hash}"`);
console.log("\nLogin credentials:");
console.log(`Username: ${username}`);
console.log(`Password: ${password}\n`);
