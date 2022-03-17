const express=require("express")
const app=express()
app.use(express.json())
const mongo =require("./shared/connect")
const product=require('./routers/productrouter')
const axios=require("axios")
var cors = require('cors')

const cheerio=require("cheerio")
const Request=require("request")
const { request } = require("express")
// const { html } = require("cheerio/lib/api/manipulation")

app.use(cors())


mongo.connect();
app.get("/getdetails",(req,res,next)=>{
    res.send("Hello getdetials");
})

// sum min max 


app.use("/",product)

// getting working on amazon website to get data using cheerio

app.get("/users", function(req,res,next){
    Request("https://www.amazon.in/s?k=furniture&crid=1T10RQ6AE2KEI&sprefix=furniture%2Caps%2C284",(error, response, html)=>{
    const $=cheerio.load(html)
    const one=$(".s-card-container")
    console.log(one.unwrap)
    var a=one.text()
    
    res.send(a);
})
    
})



// const data=()=>{
//     const params = {
//       api_key: "BC9C06AA028D4165AC29F0C25F29A65C",
//       type: "product",
//       amazon_domain: "amazon.com",
//       asin: "B073JYC4XM"
//     }
    
//     console.log("enters");
    
//     axios.get('https://api.rainforestapi.com/request/', { params})
//       .then(response => {
    
//         // print the JSON response from Rainforest API
//         // res.send(response)
//         // console.log(JSON.stringify(response.data, 0, 2));
//         console.log(response)
    
//       }).catch(error => {
//         // catch and print the error
//         console.log(error);
//       })
    
//     }
//   data()
// app.use(cors());



app.listen(3001)