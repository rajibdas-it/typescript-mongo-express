import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
  },
  dob: { type: String },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  presentAdd: { type: String, required: true },
  parmanentAdd: { type: String, required: true },
});

const User = model<IUser>("User", userSchema);

export default User;
