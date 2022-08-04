const router = require('express').Router();
const fs = require('fs');

// install npm install uuid
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
    fs.readFile('../../db/db.json', err =>
    err ? console.log(err) : console.log('Success!'))
});

router.post('/', (req, res) => {

    const note = body;
    notesArray.push(note);

    // unique id generated
    req.body.id = uuidv4();

    // add a new note to db.json in db folder
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2),
        res.json(note)
    );
    return note;

    // fs.writeFile('../../db/db.json', data, err =>
    // err ? console.log(err) : console.log('Success!'));

});


module.exports = router;