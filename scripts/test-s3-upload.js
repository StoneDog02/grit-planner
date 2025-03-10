import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} = process.env;

console.log("Testing AWS S3 upload...");
console.log("Configuration:", {
  region: AWS_REGION,
  hasAccessKey: !!AWS_ACCESS_KEY_ID,
  hasSecretKey: !!AWS_SECRET_ACCESS_KEY,
  bucketName: AWS_BUCKET_NAME,
});

const s3Client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});

// Create a small test file
const testContent = Buffer.from("This is a test file");
const testKey = `test-${Date.now()}.txt`;

// Test uploading to the bucket
try {
  console.log(`Attempting to upload ${testKey} to ${AWS_BUCKET_NAME}...`);

  await s3Client.send(
    new PutObjectCommand({
      Bucket: AWS_BUCKET_NAME,
      Key: testKey,
      Body: testContent,
      ContentType: "text/plain",
    })
  );

  console.log("Success! Test file uploaded.");
  console.log(
    `File URL: https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${testKey}`
  );
} catch (error) {
  console.error("Error uploading to S3:", error.message);
  process.exit(1);
}
