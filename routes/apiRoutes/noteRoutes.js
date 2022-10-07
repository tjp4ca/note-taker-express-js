const router = require('express').Router();
const fs = require('fs');
const db = require('../../db/db.json');

// install npm install uuid
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    res.json(db)
});

router.post('/', (req, res) => {
    console.log(req.body)
    req.body['id']=uuidv4()
    console.log(req.body)

    db.push(req.body);
    res.end()
});



module.exports = router;