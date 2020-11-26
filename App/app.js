const express = require('express')
const morgan = require('morgan')
const route = require('./routes')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/contacts', route)
app.get('*', (req, res) => res.send('<h1>This page is not exists</h1>'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`App is running at port ${PORT}`))

