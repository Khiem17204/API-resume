const Route = require('../models/routes')

module.exports = {
    getRoute(req, res) {
        Route.find()
            .then((proj) => res.json(proj))
            .catch((err) => res.status(500).json(err))
    },
    createRoute(req, res){
        Route.create(req.body)
        .then((route) => res.json(route))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    }
}