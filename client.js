const  express=require("express")

const app=express();
const axios=require("axios")


axios.post("http://localhost:5000/send").then(resu=>{
    console.log(resu["data"])
})
//console.log("hello");

    


app.listen(4000,()=>{
    console.log("Client is listening");
})