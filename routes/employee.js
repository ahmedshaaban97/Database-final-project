const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
});


router.post('/login',(req,res)=>{
   if (req.body.userName === 'root' && req.body.password === 'root'){
       res.render('admin/index');
   }
});



module.exports = router;