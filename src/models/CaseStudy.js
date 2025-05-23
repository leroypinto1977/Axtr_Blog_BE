import mongoose from "mongoose";

const caseStudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    client: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    industry: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    results: {
      type: String,
      required: true,
      trim: true,
    },
    imgURL: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^https?:\/\/.+/i.test(v);
        },
        message: "Image URL must be a valid HTTP/HTTPS URL",
      },
    },
    date: {
      type: Date,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("CaseStudy", caseStudySchema);
