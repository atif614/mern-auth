import mongoose, {mongo} from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// MONGO_URI=mongodb+srv://atif123:atif123@mernauth.lj2dhao.mongodb.net/mernauth?retryWrites=true&w=majority 
const url = process.env.MONGO_URI;
const connectDB = async () =>{
    try {
        const conn = await mongoose.connect('mongodb+srv://atif123:atif123@mernauth.lj2dhao.mongodb.net/mernauth?retryWrites=true&w=majority');
        console.log('MongoDB Connected');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};
export default connectDB;