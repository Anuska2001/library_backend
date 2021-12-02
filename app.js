const express = require('express')
const app = express()
const mongoose = require('mongoose')
const schema = require('./schema')
const url = 'mongodb+srv://titu:titu@cluster0.2vfvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url).then(()=>console.log("Database Connected..."))
app.use(express.json())

app.post('/add-new-record', async (req,res)=>{
    const myBook = req.body.book_name;
    const issuerName = req.body.issuer_name;
    const myDate = req.body.date;

    try{
        const newData = new schema(
            {
                book_name: myBook,
                issuer_name: issuerName,
                date: myDate
            }
        )
        const saveData = await newData.save()
    }catch(err){
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("Hello There")
})


app.listen(3000,()=>{
    console.log("Server is up and working...");
})