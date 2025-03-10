import bcrypt from "bcryptjs";

const password = "admin123!"; // We'll use this as a temporary password

// Generate a new hash
bcrypt.hash(password, 10).then((newHash) => {
  console.log("\nNew credentials to use:\n");
  console.log(`ADMIN_USERNAME=admin-grit-construction`);
  console.log(`ADMIN_PASSWORD_HASH=${newHash}`);
  console.log("\nLogin with:");
  console.log("Username: admin-grit-construction");
  console.log(`Password: ${password}\n`);
});
