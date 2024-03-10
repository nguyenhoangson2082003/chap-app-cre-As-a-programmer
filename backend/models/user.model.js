import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlenght: 6,
  },
  gender: {
    type: String,
    require: true,
    emun: ["male", "female"],
  },
  profilePic: {
    type: String,
    default: "",
  },
},{timestamps: true});

const User = mongoose.model("user", userSchema);

export default User;