const {Schema, model} = require("mongoose")

const experienceSchema = new Schema(
    {
        title: String,
        company: String,
        duration: {startDate: String, endDate: String},
        current: Boolean,
        description: String,
        responsibilities: Array
    }
)

const Experience = model("experience", experienceSchema)

module.exports = Experience