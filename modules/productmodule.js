const mongo=require('../shared/connect')
const axios = require('axios').default;

//Get a data from the data base
module.exports.product=async(req,res,next)=>{

    try {
        var data = await mongo.db.collection("product").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.postproduct=async(req,res,next)=>{

    try {
        console.log("data updatedd");
        var data = await mongo.db.collection("product").insertOne(req.body);
        res.send(data);
        next();
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}


module.exports.get=async(req,res,next)=>{
// set up the request parameters
try{


   
const data=()=>{
    const params = {
      api_key: "BC9C06AA028D4165AC29F0C25F29A65C",
      type: "product",
      amazon_domain: "amazon.com",
      asin: "B073JYC4XM"
    }
    
    console.log("enters");
    
    axios.get('https://api.rainforestapi.com/request/', { params})
      .then(response => {
    
        // print the JSON response from Rainforest API
        // res.send(response)

     var data=JSON.stringify(response.data, 0, 2);
     var myObject = eval('(' + data + ')');
        console.log(myObject)
    
      }).catch(error => {
        // catch and print the error
        console.log(error);
      })
    
 
  
}
data()
}
catch(err){
    console.log("error");
}
}