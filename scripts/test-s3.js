import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} = process.env;

console.log("Testing AWS S3 configuration...");
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

// Test listing buckets (this will verify credentials work)
try {
  console.log("Attempting to list buckets...");
  const command = new ListBucketsCommand({});
  const response = await s3Client.send(command);
  console.log(
    "Success! Available buckets:",
    response.Buckets?.map((b) => b.Name)
  );

  if (!response.Buckets?.some((b) => b.Name === AWS_BUCKET_NAME)) {
    console.warn(
      `Warning: Configured bucket "${AWS_BUCKET_NAME}" was not found in the list of available buckets`
    );
  }
} catch (error) {
  console.error("Error testing S3 connection:", error.message);
  process.exit(1);
}
