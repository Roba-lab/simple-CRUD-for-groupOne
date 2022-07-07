









import express from 'express'
import {Logic} from './controllers.js'
let app =express()


app.use(express.urlencoded({extended:true}))

app.post('/',Logic)

app.listen(3456,"localhost",511,()=>{
    console.log("server is listening to 3456")
})