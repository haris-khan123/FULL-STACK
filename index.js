import express from 'express'


console.log("rehan khan");

const app = express()
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
  
//   res.send("rehan khan")
// })

app.get("/twitter", (req,res)=>{
    res.send("<h1>babar ka baap kholi</h1>")
})

app.get("/api/jokes",(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"joke no 1",
            content:"hahah"
        },
        {
            id:2,
            title:"joke no 2",
            content:"hahah chal bsdk"
        },
        {
            id:3,
            title:"joke no 3",
            content:"hahah chal gandu"
        }
    ];
    res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})