const {Schema, model} = require("mongoose")

const resumeSchema = new Schema(
    {
        name: String,
        description: String,
        projects: [{
            type: Schema.Types.ObjectId,
            ref: 'project'
        }],
        experience: [{
            type: Schema.Types.ObjectId,
            ref: 'experience'
        }],

    }
)

const Resume = model("resume", resumeSchema)

module.exports = Resume