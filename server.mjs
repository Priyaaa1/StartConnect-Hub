// server.mjs

import express from 'express';
const app = express();

// Middleware to serve static files
app.use(express.static('server.js', {
  setHeaders: (res, path) => {
    if (path.endsWith('.jsx')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
