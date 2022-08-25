const mongoose = require('mongoose')
const User = require('./User')
require('dotenv').config()

mongoose.connect(process.env.DB_STRING, () => {
    console.log('connected to db')
}, e => console.error(e))

run()
async function run() {
    try {
        const user = await User.create({
            name: 'Brian',
            age: 24,
            email: 'test@test.com',
            hobbies: ['Weight Lifting', 'Bowling'],
            address: {
                street: 'Main street'
            }
        })

        console.log(user)
    } catch (e) {
        console.error(e.message)
    }
}