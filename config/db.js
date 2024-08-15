require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('DB Connected'))
.catch(() => console.error('Error when trying to connect'))