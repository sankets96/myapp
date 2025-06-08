require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

const handler=(req,res)=>{
    res.send('Hello World!')
}
app.get('/', handler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
