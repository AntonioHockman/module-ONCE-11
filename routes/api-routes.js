const router = require('express').Router();
const { v4: uuidv4 }= require ('uuid');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading data');
            return;
        }
        const dbJson = JSON.parse(data);
        res.json(dbJson);
    });
});

router.post('/api/notes', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading data');
            return;
        }
        const dbJson = JSON.parse(data);
        const newFeedback = {
            title: req.body.title,
            text: req.body.text,
            id: uuidv4(),
        };
        dbJson.push(newFeedback);
        fs.writeFile('db/db.json', JSON.stringify(dbJson), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing data');
                return;
            }
            res.json(dbJson);
        });
    });
});

// router.delete('/api/notes/:id',(req,res) => {
//    let data = fs.readFileSync('db/db.json', 'utf8');
//    const dataJSON = JSON.parse(data);
//    const newNotes = dataJSON.filter((note) => {
//     return note.id !== req.params.id;
//    });
//    fs.writeFileSync('db/db.json',JSON.stringify(newNotes));
//     res.json('Note deleted.');
// });

module.exports = router;