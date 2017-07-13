const express = require('express')

const app = express()
app.set('view engine', 'pug')
app.use(express.static(__dirname))

app.get('/resume', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('server start at: 3000...')
})