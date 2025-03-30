const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'styles')));

// Import routes
const aboutusRoute = require('./routes/aboutus');
const admissionRoute = require('./routes/admission');
const contactRoute = require('./routes/contact');
const coursedetailRoute = require('./routes/coursedetail');
const facultyRoute = require('./routes/faculty');
const homeRoute = require('./routes/home');
const loginRoute = require('./routes/login');

// Use routes
app.use('/aboutus', aboutusRoute);
app.use('/admission', admissionRoute);
app.use('/contact', contactRoute);
app.use('/coursedetail', coursedetailRoute);
app.use('/faculty', facultyRoute);
app.use('/home', homeRoute);
app.use('/login', loginRoute);

// Default route
app.get('/', (req, res) => {
    res.redirect('/home'); // Redirect to home page
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
