const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(port, () => {
    console.log(`Started the server at http://localhost:${port}`);
});
