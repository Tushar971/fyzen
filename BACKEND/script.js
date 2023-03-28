const express = require('express')
const port = 5000
const app = express()

app.use('/', require('./routes/adduser'))

app.listen(port, () => console.log(`Server is listening to port ${port}`)) 