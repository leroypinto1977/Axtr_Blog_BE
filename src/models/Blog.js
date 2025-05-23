import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  author: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  avatar: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/i.test(v);
      },
      message: 'Avatar URL must be a valid HTTP/HTTPS URL'
    }
  },
  date: {
    type: Date,
    required: true
  },
  readTime: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  imgURL: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+/i.test(v);
      },
      message: 'Image URL must be a valid HTTP/HTTPS URL'
    }
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[a-z0-9-]+$/i.test(v);
      },
      message: 'Slug can only contain lowercase letters, numbers, and hyphens'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Update updatedAt field on each save
blogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add indexes for better performance
blogSchema.index({ slug: 1 }, { unique: true });
blogSchema.index({ createdAt: -1 });

export default mongoose.model('Blog', blogSchema);
