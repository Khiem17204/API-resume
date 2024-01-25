const Contact = require('../models/contact')

module.exports = {
    getContact(req, res) {
        Contact.find()
            .then((con) => res.json(con))
            .catch((err) => res.status(500).json(err))
    },
    createContact(req, res){
        Contact.create(req.body)
        .then((con) => res.json(con))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}