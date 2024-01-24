const Experience = require('../models/experience')

module.exports = {
    getExperience(req, res) {
        console.log("check Exp")
        Experience.find()
            .then((exp) => res.json(exp))
            .catch((err) => res.status(500).json(err))
    },
    createExperience(req, res){
        console.log("check create Exp")
        Experience.create(req.body)
        .then((exp) => res.json(exp))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}