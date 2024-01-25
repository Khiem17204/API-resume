const Education = require('../models/education')

module.exports = {
    getEducation(req, res) {
        Education.find()
            .then((edu) => res.json(edu))
            .catch((err) => res.status(500).json(err))
    },
    createEducation(req, res){
        Education.create(req.body)
        .then((edu) => res.json(edu))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}