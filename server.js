require('dotenv').config()
const path= require('path')
const fs= require('fs')
const fsPromises= require('fs').promises
const express= require('express')
const { type } = require('os')
const app= express()
const PORT= process.env.PORT || 3500


const server= ()=>{
    
// middlewares:
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')))
// routes
app.use('/api', require('./routes/apiroutes'))
app.use('^/$||index(.html)?', (req, res)=> res.status(200).sendFile(path.join(__dirname, 'views', 'index.html')))

app.listen(PORT, ()=> console.log(`Server Running on PORT ${PORT}`))

}

server()

module.exports= {server}
