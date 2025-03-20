const express = require('express');
const router = express.Router();



//router handler for our home page
router.get('/home',(req,res)=>{
    res.render('home');
});


module.exports = router;