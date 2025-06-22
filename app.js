const express = require('express');
const path = require('path');
const app = express();

// Use Netcup's PORT or a very high port number to avoid conflicts
const PORT = process.env.PORT || process.env.NODE_PORT || 8080;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Simple error handling
app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('❌ Error starting server:', err);
    // Try alternative port
    const altPort = PORT + 1000;
    console.log(`🔄 Trying alternative port: ${altPort}`);
    app.listen(altPort, '0.0.0.0', (err2) => {
      if (err2) {
        console.error('❌ Failed to start on alternative port:', err2);
        process.exit(1);
      }
      console.log(`✅ Server is running on port ${altPort}`);
      console.log(`🌐 Server URL: http://localhost:${altPort}`);
    });
  } else {
    console.log(`✅ Server is running on port ${PORT}`);
    console.log(`🌐 Server URL: http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
  }
}); 