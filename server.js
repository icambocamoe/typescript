const http = require('http');
const fs = require('fs');
const path = require('path');

// Define a port for the server
const PORT = process.env.PORT || 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Define the MIME types
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.ts': 'application/typescript', // Note: Browsers won't natively run .ts files
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    ' ':'application/javascript',
  };

  // Resolve the file path based on the request URL
  let filePath = path.join(__dirname, '/', req.url === '/' ? 'index.html' : req.url);
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Check if the file exists
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, send 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
      } else {
        // Other server error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      }
    } else {
      // File found, serve it with the appropriate content type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
