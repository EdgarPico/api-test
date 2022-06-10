//creamos una constante express e importamos de 3ros un framework en este caso
const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect('mongodb+srv://edgarpico:edgar2828@cluster0.lfvtn.mongodb.net/miapp?retryWrites=true&w=majority')

//indicamos con la diagonal la raiz en este caso localhost:3000/
app.get('/users',user.list)
app.post('/users',user.create)
app.get('/users/:id',user.get)
app.put('/users/:id',user.update)
app.patch('/users/:id',user.update)
app.delete('/users/:id',user.destroy)

app.use(express.static('app'))

app.get('*', (req,res) => {
    //console.log(__dirname)
    res.sendFile(__dirname + '/index.html')
})
app.get('*',(req,res) =>{
    res.status(404).send('Esta pagina no existe')
})
app.post('*',(req,res) =>{
    res.status(404).send('Esta pagina no existe')
})
app.listen(port, () =>{
    console.log('Iniciando la aplicacion');
})