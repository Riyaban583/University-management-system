const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Contact Us'); // Rendering Contact Us.ejs
});

module.exports = router;
