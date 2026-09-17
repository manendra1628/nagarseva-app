const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Test route
app.get('/', (req, res) => {
    res.send('NagarSeva Backend is live and running! 🚀');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});