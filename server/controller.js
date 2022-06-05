const req = require('express/lib/request');

let favePeeps = [];

module.exports = {
    postFave: (req, res) => {
        let newFave = { ...req.body, id }
        favePeeps.unshift(newFave)
        res.status(200).send(favePeeps)
    }
}