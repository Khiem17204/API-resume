const Resume = require('../models/resume')

module.exports = {
    getResume(req, res) {
        Resume.find()
        .populate("projects")
        .populate("contact")
        .populate("experience")
        .populate("education")
            .then((resume) => res.json(resume))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err)})
    },
    createResume(req, res){
        Resume.create(req.body)
        .then((resume) => res.json(resume))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}