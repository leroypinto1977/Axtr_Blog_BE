import express from 'express';
import CaseStudy from '../models/CaseStudy.js';
const router = express.Router();

// Get all case studies
router.get('/', async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find()
      .sort({ date: -1 })
      .select('-__v');
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single case study
router.get('/:slug', async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findOne({ slug: req.params.slug });
    if (!caseStudy) {
      return res.status(404).json({ message: 'Case study not found' });
    }
    res.json(caseStudy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new case study
router.post('/', async (req, res) => {
  const caseStudy = new CaseStudy({
    ...req.body,
    slug: req.body.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  });

  try {
    const newCaseStudy = await caseStudy.save();
    res.status(201).json(newCaseStudy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
