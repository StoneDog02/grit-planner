import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

// Log environment variables (without sensitive values)
console.log("S3 Configuration Check:", {
  hasRegion: !!process.env.AWS_REGION,
  hasAccessKey: !!process.env.AWS_ACCESS_KEY_ID,
  hasSecretKey: !!process.env.AWS_SECRET_ACCESS_KEY,
  hasBucketName: !!process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_REGION,
  bucketName: process.env.AWS_BUCKET_NAME,
});

if (!process.env.AWS_REGION) {
  throw new Error("AWS_REGION is not configured");
}
if (!process.env.AWS_ACCESS_KEY_ID) {
  throw new Error("AWS_ACCESS_KEY_ID is not configured");
}
if (!process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS_SECRET_ACCESS_KEY is not configured");
}
if (!process.env.AWS_BUCKET_NAME) {
  throw new Error("AWS_BUCKET_NAME is not configured");
}

export const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Test the S3 client configuration
s3Client.config.credentials().then(
  (creds) => {
    console.log("S3 client configured successfully");
  },
  (error) => {
    console.error("S3 client configuration error:", error);
  }
);

export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
export const AWS_REGION = process.env.AWS_REGION;
