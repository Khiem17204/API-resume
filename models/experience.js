const {Schema, model} = require("mongoose")
const db = require("../config/connection")
db.once('open', () => {
    console.log('Connected to the database1');
});
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