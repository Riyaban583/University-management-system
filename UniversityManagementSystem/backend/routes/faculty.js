const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Faculty'); // Rendering Faculty.ejs
});

module.exports = router;
