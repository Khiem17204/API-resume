const Message = require('../models/message')

module.exports = {
    getMessage(req, res) {
        Message.find()
            .then((mes) => res.json(mes))
            .catch((err) => res.status(500).json(err))
    },
    createMessage(req, res){
        Message.create(req.body)
        .then((mes) => res.json(mes))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}