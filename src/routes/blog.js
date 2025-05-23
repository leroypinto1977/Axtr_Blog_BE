import express from 'express';
import Blog from '../models/Blog.js';
const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find()
      .sort({ date: -1 })
      .select('-__v');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single blog
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new blog
router.post('/', async (req, res) => {
  const blog = new Blog({
    ...req.body,
    slug: req.body.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
