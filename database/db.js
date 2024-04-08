import mongoose from "mongoose"


const connection = () => {
    

    const DB_URI = `mongodb+srv://dalmikchand:iu97p3RwqvwD4tRI@cluster0.x6n9mzq.mongodb.net/?retryWrites=true&w=majority`;

    try{

        mongoose.connect(DB_URI);
        console.log("Database connected successfully");

    } catch(error) {
        console.log('error while connecting to the database', error.message);
    }
}

export default connection;