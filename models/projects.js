const {Schema, model} = require("mongoose")

const projectSchema = new Schema(
    {
        name: String,
        repo: String,
        description: String,
        stack: Array
    }
)

const Projects = model("projects", projectSchema)

module.exports = Projects