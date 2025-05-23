import express from 'express';
import Blog from '../models/Blog.js';

const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Failed to fetch blogs', error: error.message });
  }
});

// Get single blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(`Error fetching blog ${req.params.slug}:`, error);
    res.status(500).json({ message: 'Failed to fetch blog', error: error.message });
  }
});

// Create new blog
router.post('/', async (req, res) => {
  try {
    const blog = new Blog({
      title: req.body.title,
      author: req.body.author,
      avatar: req.body.avatar,
      date: req.body.date,
      readTime: req.body.readTime,
      imgURL: req.body.imgURL,
      description: req.body.description,
      content: req.body.content,
      slug: req.body.slug
    });

    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(400).json({ message: 'Failed to create blog', error: error.message });
  }
});

// Update blog
router.put('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true, runValidators: true }
    );
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    console.error(`Error updating blog ${req.params.slug}:`, error);
    res.status(400).json({ message: 'Failed to update blog', error: error.message });
  }
});

// Delete blog
router.delete('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(`Error deleting blog ${req.params.slug}:`, error);
    res.status(500).json({ message: 'Failed to delete blog', error: error.message });
  }
});

export default router;
