import  config  from './config.js'
import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        await mongoose.connect(config.MONGO_URI)
        console.log("mongodb is connected")
    } catch (error) {
        console.log("Error in database connection",error.message)
    }
}

export default connectDB