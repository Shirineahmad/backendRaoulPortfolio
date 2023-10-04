const express = require('express');
const router = express.Router();

const {
    getAllAbout,
    getAboutByID ,
    addAbout,
    updateAboutByID,
    deleteAboutByID,
} = require('../controllers/AboutController');

router.get('/getAll', getAllAbout);
router.get('/getByID/:ID', getAboutByID);
router.post('/add', addAbout);
router.put('/update/:ID', updateAboutByID);
router.delete('/delete/:ID', deleteAboutByID);

module.exports = router;