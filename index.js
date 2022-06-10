//const mongoose = require('mongoose')
import mongoose from 'mongoose'
import fetch from 'node-fetch';

mongoose.connect('mongodb+srv://edgarpico:edgar2828@cluster0.lfvtn.mongodb.net/miapp?retryWrites=true&w=majority')

const User = mongoose.model('User',{
    username: String,
    age: Number,
})

const crear = async() => {
    const user = new User({username:'Adrian Patron', age:24})
    const saveUser = await user.save()
    console.log(saveUser);

}

//crear()
const buscarTodo = async () =>{
    const users = await User.find()
    console.log(users);
}

//buscarTodo()

const buscar = async () =>{
    const user = await User.find({username: 'Edgar Pinia'})
    console.log(user);

}

//buscarUno()

const buscarUno = async () =>{
    const user = await User.findOne({username: 'Edgar Pinia'})
    console.log(user);
}

//Actualizar()

const actualizar = async () =>{
    const user = await User.findOne({username: 'Edgar Pinia'})
    console.log(user);
    user.age = 30
    await user.save()
}

//Eliminar()

const eliminar = async () =>{
    const user = await User.findOne({username: 'Edgar Pinia'})
    console.log(user);
    if(user){
        await user.remove()
    }    
}

fetch('https://opticasbenichy.com.mx/benichy/ws/tratamiento.php')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
}).catch(err => console.error(err));

    eliminar()
