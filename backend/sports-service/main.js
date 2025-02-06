const express = require('express')
const app = express()
const port = 80
const mongoose = require('mongoose');
const {SportEvent} = require("../utils/database-utils");

mongoose.connect(process.env.DATABASE_URL);

app.use(express.json())

// const c1 = new Concert({ eventname: 'Lansare album', artist: 'Cargo', location: 'Timisoara' , date: new Date(), price: 50 });
// c1.save().then(() => console.log('Added concert 1'));
//
// const c2 = new Concert({ eventname: 'Lansare album', artist: 'Vita de vie', location: 'Cluj' , date: new Date(), price: 80 });
// c2.save().then(() => console.log('Added concert 2'));


app.get('/sportEvents', (req, res) => {
    res.send('sports-service')
})

app.get('/sportEvents/sportEvents', async (req, res) => {
    try {
        const sportEvents = await SportEvent.find(undefined, undefined, undefined);
        res.send(sportEvents);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get(`/sportEvents/sportEvents/:sportEventId`, async (req, res) => {
    try {
        const sportEvent = await SportEvent.findOne({_id: req.params.sportEventId});
        res.send(sportEvent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
