const mongoose = require('mongoose')
const User = require('./User')
require('dotenv').config()

mongoose.connect(process.env.DB_STRING, () => {
    console.log('connected to db')
}, e => console.error(e))

add('Brian', 24, 'test@test2.com', ['Bowling'], { street: 'Main Street' })
find(20, 'Brian')

async function add(name, age, email, hobbies, address) {
    try {
        const user = await User.create({
            name: name,
            age: age,
            email: email,
            hobbies: hobbies,
            address: address
        })
        console.log(user)
    } catch (e) {
        console.error(e.message)
    }
}

async function find(age, name) {
    try {
        const user = await User.where('name').equals(name).where('age').gt(age)
        console.log({ found: user })
    } catch (err) {
        console.error(err)
    }
}