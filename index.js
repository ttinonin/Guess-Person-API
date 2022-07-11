const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuid } = require('uuid');
const myModule = require('./firebase/firebase')
require('dotenv').config()

const app = express()

const api_key = process.env.API_KEY

app.use(bodyParser.json())

app.get(`/1&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '1'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/2&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '2'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/3&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '3'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/4&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '4'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/5&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '5'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/6&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '6'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/7&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '7'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.get(`/8&${api_key}`, (req, res) => {
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '8'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log(`On port: ${process.env.PORT}`)
})