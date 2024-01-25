const {Schema, model} = require("mongoose")

const schoolSchema = new Schema(
    {
        school: String,
        duration: {startDate: String, endDate: String},
        current: Boolean,
        description: String,
        major: String
    }
)

const Education = model("school", schoolSchema)

module.exports = Education