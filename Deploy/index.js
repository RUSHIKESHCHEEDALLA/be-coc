
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! How are you?')
})

app.get('/twitter',(req,res)=>{
    res.send('rushikeshcheedalla')
})

app.get('/login',(req,res)=>{
    res.send('<h1>LOGIN PAGE</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>YOUTUBE PAGE</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
