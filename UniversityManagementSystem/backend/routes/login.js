const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Login'); // Rendering Login.ejs
});

module.exports = router;
