const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Admission'); // Rendering Admission.ejs
});

module.exports = router;
