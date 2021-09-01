import mongoose from 'mongoose'
import config from './config'


(async () =>{
    try{
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`)
        console.log("La base de datos se llama: " + db.connection.name ) 
    } catch (error){
        console.log(console.error);
    }
})()
