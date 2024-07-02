const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  first_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 30,
  },

  mobile: {
    type: String,
    required: true,
  },

  messages: [],
});

//save message
userSchema.methods.Messagesave = async function (message) {
  try{

    this.messages = this.messages.concat({message});
    await this.save();
    return message;
  }
  catch(error){
    console.log(error);
  }
};

// Create Model
const users = new mongoose.model("users", userSchema);

module.exports = users;
