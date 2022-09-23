const path= require('path')
const axios= require('axios')

const BASE_URL= process.env.API_URL

const getController= async(req, res)=>{
    const response= await axios(BASE_URL)
    res.json(response.data)
}

module.exports= {
    getController
}