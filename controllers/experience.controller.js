const Experience = require('../models/experience')

module.exports = {
    getExperience(req, res) {
        Experience.find()
            .then((exp) => res.json(exp))
            .catch((err) => res.status(500).json(err))
    },
    createExperience(req, res){
        Experience.create(req.body)
        .then((exp) => res.json(exp))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}