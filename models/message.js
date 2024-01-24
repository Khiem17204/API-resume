const {Schema, model} = require("mongoose")

const messageSchema = new Schema(
    {
        name: String,
        message: String,
        email: {
            type: String,
            match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            require: true
        }
    }
)

const Message = model("message", messageSchema)

module.exports = Message