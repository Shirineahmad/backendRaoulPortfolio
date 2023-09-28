const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const {
    getAllTestimonials,
    getTestimonialByID,
    addTestimonial,
    updateTestimonialByID,
    deleteTestimonialByID,
} = require('../controllers/TestimonialsController');

router.get('/getAll', getAllTestimonials);
router.get('/getByID/:ID', getTestimonialByID);
router.post('/add', upload.single('image'), addTestimonial);
router.put('/update/:ID', updateTestimonialByID);
router.delete('/delete/:ID', deleteTestimonialByID);

module.exports = router;

