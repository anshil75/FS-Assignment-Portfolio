const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

function sendFile(res, fileName) {
  const filePath = path.resolve(__dirname, '..', 'files', fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' });
  }

  res.download(filePath, fileName, err => {
    if (err && !res.headersSent) {
      console.error('File download error:', err.message);
      res.status(500).json({ error: 'Failed to download file' });
    }
  });
}

router.get('/pdf', (req, res) => {
  sendFile(res, 'resume.pdf');
});

router.get('/docx', (req, res) => {
  sendFile(res, 'resume.docx');
});

module.exports = router;
