const {Schema, model} = require('mongoose');

const routeSchema = new Schema(
    {
        routes: Array
    }
)

const Route = model('route', routeSchema)

module.exports = Route