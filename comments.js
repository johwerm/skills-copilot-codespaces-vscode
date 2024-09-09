// Create web server
// 1. Create a web server
// 2. Handle requests
// 3. Return response
// 4. Listen on a port
// 5. Run the server

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 2. Handle requests
  if (req.url === '/comments') {
    // 3. Return response
    res.write('Comments page');
    res.end();
  } else if (req.url === '/users') {
    // 3. Return response
    res.write('Users page');
    res.end();
  } else if (req.url === '/posts') {
    // 3. Return response
    res.write('Posts page');
    res.end();
  } else if (req.url === '/about') {
    // 3. Return response
    res.write('About page');
    res.end();
  } else if (req.url === '/contact') {
    // 3. Return response
    res.write('Contact page');
    res.end();
  } else {
    // 3. Return response
    res.write('Home page');
    res.end();
  }
});

// 4. Listen on a port
server.listen(3000);

// 5. Run the server
console.log('Server is running on port 3000');