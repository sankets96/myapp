require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())
const port = process.env.PORT

const handler=(req,res)=>{
    res.send('Hello World!')
}
app.get('/api/', handler)

app.get('/api/get-data',(req,res)=>{
  let obj = [


    {
      name:"sanket",
      description:"Son of vijay suryavanshi"
    },
    {
      name:"vijay",
      description:"son of janardhan"
    },

    {
      name:"suvarna",
      description:"spouce of vijay suryavanshi"
    }


  ]
  res.send(obj)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
