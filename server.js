const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Import Routers
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

// Use Routers
app.use('/', indexRouter);
app.use('/products', productsRouter);

// Handle 404
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
