const express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send("user information ");
})
router.get('/newuser',(req,res)=>{
    res.send("new user information ");
})
router
    .route('/:id')
    .get((req,res)=>{
        console.log(req.users);
        res.send("reterive the id "+req.params.id);
    })
    .put((req,res)=>{
        res.send("reterive the id "+req.params.id);
    })
    .delete((req,res)=>{
        res.send("reterive the id "+req.params.id);
    })
// router.get('/:id',(req,res)=>{
//     res.send("id values: "+req.params.id);
// })
// router.put('/:id',(req,res)=>{
//     res.send("id values1: "+req.params.id);
// })
// router.delete('/:id',(req,res)=>{
//     res.send("id values2: "+req.params.id);
// })
const middle=[{name:"raja"},{name:"rani"},{name:"sepoy"}];
router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.users=middle[id];
    next();
})
module.exports = router;