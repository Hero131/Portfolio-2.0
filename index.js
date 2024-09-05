const express=require("express")
const app=express()
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`port :${port}`)
})
app.get("/",(req,res)=>{
    res.send("This is EXPRESS !")
})
app.get("/bcag",(req,res)=>{
    res.send("ppp")
})

const var1=10;
const var2=20;

app.get("/sum",(req,res)=>{
    const sum=(var1+var2);

    res.send(`sum is:${sum}`)
})
app.get("/pro",(req,res)=>{
    const pro=(var1*var2);
    res.send(`product is:${pro}`)
})
app.get("/sub",(req,res)=>{
    const sub=(var1-var2);
    res.send('sub is:${sub}')
})
app.get("/div",(req,res)=>{
    const div=(var1/var2);
    res.send('div is:${div}')
});
