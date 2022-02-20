const {MongoClient} =require("mongodb")
module.exports={
    db:null,
    async connect(){

        try{
        const connection=await MongoClient.connect("mongodb+srv://root:root@cluster0.sc1nb.mongodb.net?retryWrites=true&w=majority")
        this.db=connection.db("webscrap")
        console.log("<-----Mongo DB Connected----->")
        
        }
        catch(err){
            if(err){
                console.log("error");
            }

        }
    }
}