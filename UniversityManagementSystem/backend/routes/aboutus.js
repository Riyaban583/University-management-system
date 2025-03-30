const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('aboutus'); // Rendering aboutus.ejs
});

module.exports = router;
