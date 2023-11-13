const express = require('express')
const userActionsRouter = require('./routes/usersActions.router')
const app = express()
const PORT = process.env.PORT | 8080
  
app.use(express.json())

app.use('/api',userActionsRouter)

app.listen(PORT, ()=>{
    console.log(`Server has been started on ${PORT}`);
})