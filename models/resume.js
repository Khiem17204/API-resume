const {Schema, model} = require("mongoose")

const resumeSchema = new Schema(
    {
        name: String,
        description: String,
        experience: [{
            type: Schema.Types.ObjectId,
            ref: 'experience'
        }],
        education: {
            type: Schema.Types.ObjectId,
            ref: "school"
        },
        projects: [{
            type: Schema.Types.ObjectId,
            ref: 'projects'
        }],
        contact: [{
            type: Schema.Types.ObjectId,
            ref: "contact"
        }]
    }
)

const Resume = model("resume", resumeSchema)

module.exports = Resume