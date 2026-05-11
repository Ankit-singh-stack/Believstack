const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/contact', async (req, res) => {
  // In production, add validation and email/DB logic
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  // For demo, just return success
  return res.status(200).json({ message: 'Message received!' });
});

module.exports = router;
