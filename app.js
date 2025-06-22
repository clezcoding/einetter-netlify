const express = require('express');
const path = require('path');
const app = express();

// Use Netcup's PORT or default to 3000
const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Better error handling
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server URL: http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Trying port ${PORT + 1}`);
    app.listen(PORT + 1, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT + 1}`);
    });
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
}); 