const router = require('express').Router();

// first way
// const noteRoutes = require('../apiRoutes/noteRoutes');
// router.use(noteRoutes);

// second way
router.use("/notes", require('./noteRoutes'));

module.exports = router;