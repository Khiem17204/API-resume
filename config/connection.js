const {connect, connection} = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://khiem17204:${process.env.DB_PASSWORD}@resume-api.oidqadr.mongodb.net/?retryWrites=true&w=majority`;

connect(uri)

module.exports = connection