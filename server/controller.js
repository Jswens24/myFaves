const req = require('express/lib/request');

let favePeeps = [];

module.exports = {
    postFave: (req, res) => {
        let newFave = { ...req.body }
        favePeeps.push(newFave)
        console.log(favePeeps);
        res.status(200).send(favePeeps)
    }
}