import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true,
    },
    node_id:{
        type: String,
        required:true,
    },
    email:{
        type:String,
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);