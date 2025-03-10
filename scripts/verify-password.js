import bcrypt from "bcryptjs";

const password = "admin123!";
const hash = "$2a$10$p34T3gV4hNd3JxWQuoRKFuFrA3Dd2S7GvRE4UxHHm4JHHjtD6oKU2"; // The hash we generated

bcrypt.compare(password, hash).then((result) => {
  console.log("\nPassword verification test:");
  console.log("Password:", password);
  console.log("Hash:", hash);
  console.log("Match:", result ? "YES ✅" : "NO ❌");

  if (!result) {
    console.log(
      "\nThere might be an issue with how the hash is stored in your .env file."
    );
    console.log("Make sure:");
    console.log(
      "1. The hash is copied exactly as shown (including the $2a$ prefix)"
    );
    console.log(
      "2. There are no extra spaces or quotes around the hash in .env"
    );
    console.log("3. The hash is not being modified when loaded from .env\n");
  }
});
