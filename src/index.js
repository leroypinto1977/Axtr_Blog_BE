import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.mongo_uri;
if (!MONGODB_URI) {
  throw new Error("MongoDB URI is not defined in .env file");
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
import blogRoutes from "./routes/blog.js";
import caseStudyRoutes from "./routes/case-study.js";

// Routes
app.use("/api/blog", blogRoutes);
app.use("/api/case-study", caseStudyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
