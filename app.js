const express = require('express');
const path = require('path');
const app = express();

// Use Netcup's PORT or try to find an available port
const PORT = process.env.PORT || process.env.NODE_PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Function to find available port
function findAvailablePort(startPort) {
  return new Promise((resolve, reject) => {
    const net = require('net');
    const server = net.createServer();
    
    server.listen(startPort, '0.0.0.0', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
      }
    });
  });
}

// Start server with port finding
async function startServer() {
  try {
    const availablePort = await findAvailablePort(PORT);
    
    app.listen(availablePort, '0.0.0.0', (err) => {
      if (err) {
        console.error('Error starting server:', err);
        process.exit(1);
      }
      console.log(`✅ Server is running on port ${availablePort}`);
      console.log(`🌐 Server URL: http://localhost:${availablePort}`);
      console.log(`📁 Serving files from: ${path.join(__dirname, 'dist')}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer(); 