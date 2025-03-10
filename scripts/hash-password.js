import bcrypt from "bcryptjs";

const password = "admin123!"; // We'll use this as a temporary password
bcrypt.hash(password, 10).then((hash) => {
  console.log("\nUse these values in your .env file:\n");
  console.log(`ADMIN_USERNAME=admin-grit-construction`);
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
  console.log("\nYour login credentials will be:");
  console.log("Username: admin-grit-construction");
  console.log(`Password: ${password}\n`);
});
