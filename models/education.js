const {Schema, model} = require("mongoose")

const schoolSchema = new Schema(
    {
        school: String,
        duration: {startDate: Date, endDate: Date},
        current: Boolean,
        description: String,
        major: String
    }
)

const Education = model("school", schoolSchema)

module.exports = Education