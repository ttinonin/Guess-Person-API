const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { v4: uuid } = require('uuid');
const myModule = require('./firebase/firebase')
require('dotenv').config()

const app = express()

const api_key = process.env.API_KEY

app.use(bodyParser.json())

app.use(
    cors({
        origin: "*"
    })
)

app.get(`/1&${api_key}`, (req, res) => (
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
))

app.get(`/2&${api_key}`, (req, res) => (
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
    ))

app.get(`/3&${api_key}`, (req, res) => (
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
    ))

app.get(`/4&${api_key}`, (req, res) => (
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
    ))

app.get(`/5&${api_key}`, (req, res) => (
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
    ))

app.get(`/6&${api_key}`, (req, res) => (
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
    ))

app.get(`/7&${api_key}`, (req, res) => (
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
    ))

app.get(`/8&${api_key}`, (req, res) => (
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
    ))

app.get(`/9&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '9'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/10&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '10'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/11&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '11'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/12&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '12'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/13&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '13'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/14&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '14'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/15&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '15'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/16&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '16'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/17&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '17'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/18&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '18'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/19&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '19'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/20&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '20'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/21&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '21'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/22&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '22'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/23&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '23'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/24&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '24'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/25&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '25'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/26&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '26'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/27&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '27'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/28&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '28'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/29&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '29'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/30&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '30'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))

app.get(`/31&${api_key}`, (req, res) => (
    myModule.database.ref('people').once('value', (snapshot) => {
        let data = snapshot.val()
        for(let i in data){
            if(i === '31'){
                console.log(data[i])
                res.send(JSON.stringify(data[i]))
                res.end()
            }
        }
    })
    ))


app.listen(process.env.PORT, () => {
console.log(`On port: ${process.env.PORT}`)
})
