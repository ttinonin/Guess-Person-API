const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuid } = require('uuid');
const myModule = require('./firebase/firebase')

const app = express()

const api_key = 'penis'

app.use(bodyParser.json())

let count = 1

app.get(`/1&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        for(let i in snapshot.val()){
            console.log(i)
        }
    })
    res.end()
})

app.get(`/2&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/3&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/4&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/5&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/6&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/7&${api_key}`, (req, res) => ( res.send('daniel') ))

app.get(`/8&${api_key}`, (req, res) => ( res.send('daniel') ))

app.listen(3000, () => {
    console.log('penis')
})