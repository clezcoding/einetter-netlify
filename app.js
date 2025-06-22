const express = require('express');
const path = require('path');
const app = express();

// Netcup uses Nginx reverse proxy, so we need a very high port
// Try multiple high ports to avoid conflicts
const PORTS = [9000, 9001, 9002, 9003, 9004, 9005, 9006, 9007, 9008, 9009];

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Function to try different ports
function tryPort(portIndex) {
  if (portIndex >= PORTS.length) {
    console.error('❌ All ports are in use. Cannot start server.');
    process.exit(1);
  }

  const port = PORTS[portIndex];
  console.log(`🔄 Trying port ${port}...`);

  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`✅ Server is running on port ${port}`);
    console.log(`🌐 Server URL: http://localhost:${port}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
    console.log(`🔧 Netcup will proxy requests to this port`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`❌ Port ${port} is in use, trying next port...`);
      server.close();
      tryPort(portIndex + 1);
    } else {
      console.error('❌ Server error:', err);
      process.exit(1);
    }
  });
}

// Start trying ports
tryPort(0); 