const express = require('express');
const router = express.Router();



//router handler for our home page
router.get('/home',(req,res)=>{
    res.render('home');
});

12
module.exports = router;