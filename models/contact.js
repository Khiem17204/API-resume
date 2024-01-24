const {Schema, model} = require("mongoose")

const contactSchema = new Schema(
    {
        platform: String,
        url: String
    }
)

const Contact = model("contact", contactSchema)

module.exports = Contact