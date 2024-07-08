const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const StudentsModel = require('./models/Students');



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/StudentsDB")

app.get('/',(req, res) => {
StudentsModel.find({})
.then(students => res.json(students))
.catch(err => res.json(err))
});

app.get('/getStudents/:id',(req,res)=>{
    const id = req.params.id;
    StudentsModel.findById({id:id})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.put('/updateStudents/:id',(req,res)=>{
    const id = req.params.id;
    StudentsModel.findByIdAndUpdate({_id: id},{name: req.body.name,addre:req.body.addre,stream:req.body.stream,year: req.body.year})
    .then(students => res.json(students))
    .catch(err => res.json(err))
})

app.delete('/deleteStudents/:id',(req,res)=>{
    const id = req.params.id;
    StudentsModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
 
})

app.post("/createStudents" , (req, res) => {
    StudentsModel.create(req.body)
    .then(user => res.json(user))
    .catch((err) => res.status(400).json(err));
})





app.listen(3001,() =>{
    console.log('Server is running on port 3001');
});