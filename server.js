const express = require('express')
const app = express()
const router = require('./routes')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.cors({
    origin:true,
    credentials:true
}
)

app.use(router)

app.use((error,req,res,next)=>{
    res.send(error.message)
})

app.listen(3000,()=>{
    console.log('server start')
})