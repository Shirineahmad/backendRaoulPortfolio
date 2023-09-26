const express = require('express');
const router = express.Router();

const {
    getAllHeroAndAbout,
    getHeroAndAboutByID,
    addHeroAndAbout,
    updateHeroAndAboutByID,
    deleteHeroAndAboutByID,
} = require('../controllers/HeroAndAboutController');

router.get('/getAll', getAllHeroAndAbout);
router.get('/getByID/:ID', getHeroAndAboutByID);
router.post('/add', addHeroAndAbout);
router.put('/update/:ID', updateHeroAndAboutByID);
router.delete('/delete/:ID', deleteHeroAndAboutByID);

module.exports = router;