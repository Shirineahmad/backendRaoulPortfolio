require('dotenv').config();
const cors = require('cors');
const express = require('express');
const dbConnection = require('./config/db');
const SkillsRoute = require('./routes/SkillsRoute');
const HeroAndAboutRoute = require('./routes/HeroAndAboutRoute');
const ContactMeRoute = require('./routes/ContactMeRoute');
const TestimonialsRoute = require('./routes/TestimonialsRoute');
const MyProjectsRoute = require('./routes/MyProjectsRoute');
const ContactInfoAndDescRoute = require('./routes/ContactInfoAndDescRoute');
const LogInRoute = require('./routes/LogInRoute');



const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/Skills', SkillsRoute);
app.use('/HeroAndAbout', HeroAndAboutRoute);
app.use('/ContactMe', ContactMeRoute);
app.use('/Testimonials', TestimonialsRoute);
app.use('/MyProjects', MyProjectsRoute);
app.use('/ContactInfoAndDescRoute', ContactInfoAndDescRoute);
app.use('/LogIn', LogInRoute);



app.listen(port, () => {
  dbConnection()
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
  console.log(`Example app listening on port ${port}`);
});