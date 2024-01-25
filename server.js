const express = require('express')
const app = express()
const port = 3000
const db = require("./config/connection")
const Resume = require('./models/resume');
const {createExperience, getExperience} = require("./controllers/experience.controller")
const {createRoute, getRoute} = require("./controllers/route.controller")
const {createContact, getContact} = require("./controllers/contact.controller")
const {createEducation, getEducation} = require("./controllers/education.controller")
const {createProject, getProject} = require("./controllers/project.controller")
const {createResume, getResume} = require("./controllers/resume.controller")
const {createMessage, getMessage} = require("./controllers/message.controller")


app.use(express.json());

db.once('open', () => {
    console.log('Connected to the database');
});

// app.post('/experience', createExperience)
app.get("/experience", getExperience)

app.get("/",getRoute)
// app.post("/", createRoute)

// app.post("/resume", async (req,res) =>{
//     const project = await db.collection("projects").find().map(x=>x._id).toArray()
//     const experience = await db.collection("experiences").find().map(x=>x._id).toArray()
//     const contact = await db.collection("contacts").find().map(x=>x._id).toArray()
//     const school = await db.collection("schools").find().map(x=>x._id)[0]
//     Resume.create({
//         name: "Khiem Le",
//         description: "A rising junior at Umass Amherst with experience in cloud development, backend development.",
//         experience: experience,
//         education: school,
//         projects: project,
//         contact: contact
//     }).then((resume) => res.json(resume))
//     .catch((err) => {
//         console.log(err);
//         return res.status(500).json(err);
//     });
// })
app.get("/resume", getResume)

app.get("/contact", getContact)
// app.post("/contact", createContact)

app.get("/education", getEducation)
// app.post("/education", createEducation)

app.get("/project", getProject)
// app.post("/project", createProject)

app.get("/message", getMessage)
app.post("/message", createMessage)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})