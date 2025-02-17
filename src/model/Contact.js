import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true, 
    minlength: 3,  
  },
  email:{
    type: String, 
    required: true, 
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  },
  phone:{
    type: String, 
    required: true,  
  },
  message:{ 
    type: String, 
    required: true,  
  },
  subject:{
    type: String,    
  }
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
