import mongoose from 'mongoose'
import user from '../models/userModel';

const connectDB = async () => {
    try {
        const databaseName='message';
        const con = await mongoose.connect(`mongodb://localhost:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    user();
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB