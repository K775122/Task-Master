const router = require('express').Router()
const res = require('express/lib/response');
const tasks = require("../modals/schema")

router.get('/',(req,res)=>{
    var myTask;
    tasks.find({},function(err, data){
        if(err){
            console.log(err)
        }
        else{
            myTask = data;
            console.log(myTask)
            res.render("index" ,{data:myTask})
        }
    } )
});
router.post('/submit',(req,res)=>{
   const task = req.body.task;
   tasks({task: task}).save(function(err,doc){
       if(err){
           console.log(err)
       }
       res.redirect("/")
   })
});
router.post("/delete", (req,res)=>{
   
    const id = req.body.id;
    console.log(id)
    tasks.findOneAndRemove({_id:id}, (err, doc)=>{
        console.log("deleted")
        res.redirect("/")
    })
})
module.exports = router;