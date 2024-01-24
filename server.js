const express = require('express')
const app = express()
const port = 3000
const db = require("./config/connection")
const {createExperience, getExperience} = require("./controllers/experience.controller")

app.use(express.json());

db.once('open', () => {
    console.log('Connected to the database');
});
app.post('/experience', createExperience)
app.get("/a", getExperience)
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})