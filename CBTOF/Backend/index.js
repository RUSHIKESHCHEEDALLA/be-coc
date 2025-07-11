import express from 'express';
const app=express()

const port = 3000

app.use(express.static('dist'));//middleware

app.get('/api/jokes', (req, res) => {
  const jokes=[
    {
      id:1,
      name:"rushikesh"
    },
    {
      id:2,
      name:"nikhil"
    },
    {
      id:3,
      name:"saicharan"
    }
  ]
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
