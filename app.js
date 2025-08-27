const express = require('express');
const app = express();
const urlRoutes = require('./routes/url');
const { port } = require('./config');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/url', urlRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('URL Shortener Service');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});