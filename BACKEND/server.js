const express = require('express')
const cors = require('cors')
const cl = require('cli-color')
const mongoose = require('mongoose')
const user_route = require('./routes/userroutes')

const URL = 'mongodb://localhost:27017'
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(`${URL}/Accounts`,{
    UseNewUrlParser:true,
    UseUnifiedTopology:true
})
.then(()=>console.log(cl.black.bgGreenBright('Database Successfully connected')))
.catch((error)=>console.log(error))

app.use('/user',user_route)

app.listen(PORT,()=>{
    console.log("----------------------------")
    console.log(cl.black.bgGreenBright('Running successfully on port'))
    console.log("-------------------------------")
})    