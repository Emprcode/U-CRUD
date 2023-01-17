import mongoose from 'mongoose'

const apiEp = `mongodb://localhost:27017/home`

export const connectDb = () => {
    mongoose.set('strictQuery', true);
    const conn = mongoose.connect(apiEp);
    
    conn ? console.log(`mongo Connected`) : console.log("unable to connect with database")
}