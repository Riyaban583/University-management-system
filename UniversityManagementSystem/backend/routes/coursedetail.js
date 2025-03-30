const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('coursedetail'); // Rendering coursedetail.ejs
});

module.exports = router;
