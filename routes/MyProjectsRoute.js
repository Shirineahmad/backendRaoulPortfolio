const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

    const {
        getAllProjects,
        getProjectByID ,
        addProject,
        updateProjectByID,
        deleteProjectByID,
    } = require('../controllers/MyProjectsController');
    
    router.get('/getAll', getAllProjects);
    router.get('/getByID/:ID', getProjectByID);
    router.post('/add',upload.single('image'),  addProject);
    router.put('/update/:ID',  updateProjectByID);
    router.delete('/delete/:ID', deleteProjectByID);

    module.exports = router;