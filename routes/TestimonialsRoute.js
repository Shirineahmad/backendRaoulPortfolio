const express = require('express');
const router = express.Router();

const {
    getAllTestimonials,
    getTestimonialByID,
    addTestimonial,
    updateTestimonialByID,
    deleteTestimonialByID,
} = require('../controllers/TestimonialsController');

router.get('/getAll', getAllTestimonials);
router.get('/getByID/:ID', getTestimonialByID);
router.post('/add', addTestimonial);
router.put('/update/:ID', updateTestimonialByID);
router.delete('/delete/:ID', deleteTestimonialByID);

module.exports = router;

