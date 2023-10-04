const express = require('express');
const router = express.Router();

const {
    getAllLogIn,
    getLogInByID ,
    addLogIn,
    updateLogInByID,
    deleteLogInByID,
} = require('../controllers/LogInController');

router.get('/getAll',  getAllLogIn);
router.get('/getByID/:ID',  getLogInByID);
router.post('/add',  addLogIn);
router.put('/update/:ID', updateLogInByID);
router.delete('/delete/:ID', deleteLogInByID);

module.exports = router;