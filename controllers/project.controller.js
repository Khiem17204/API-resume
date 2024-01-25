const Project = require('../models/projects')

module.exports = {
    getProject(req, res) {
        Project.find()
            .then((proj) => res.json(proj))
            .catch((err) => res.status(500).json(err))
    },
    createProject(req, res){
        Project.create(req.body)
        .then((proj) => res.json(proj))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}