const  express=require("express")

const app=express();

app.post("/send",async(req,res)=>{
    try {
        let curr;
        const time=new Date.now()
        setTimeout(()=>{
            //time=new Date.now()
            res.status(200).send("hello world!");

        },5000)
        
    } catch (error) {
        return res.status(500).send(error);
    }
})

app.listen(5000,()=>{
    console.log("server is listening");
})
