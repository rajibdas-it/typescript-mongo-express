import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  // inserting a test a data into mongodb
  //   res.send("Hello World!");
  /**
   step1: Interface Done
   step2: Schema Done
   step3: Model
   step4: Database Query
   */
  //    creating an interface
  interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dob?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAdd: string;
    parmanentAdd: string;
  }

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
  //model declarations process
  // const modelName = modelBuiltInFunction<Interface Name>("modelName", SchemaName)
  const User = model<IUser>("User", userSchema); //create usermodel from userschema
  const createUserToDB = async () => {
    const user = new User({
      id: "555",
      role: "student",
      password: "13456",
      name: {
        firstName: "Das",
        middleName: "Chandra",
        lastName: "Rajib",
      },
      dob: "23-02-1993",
      gender: "male",
      email: "rajibrad@gmail.com",
      contactNo: "+880-1722-737200",
      emergencyContactNo: "+880-1714-394799",
      presentAdd: "Ka-9/3, Shahjadpur, Gulshan, Dhaka-1212",
      parmanentAdd: "Ka-9/3, Shahjadpur, Gulshan, Dhaka-1212",
    });
    await user.save();
  };
  createUserToDB();
});

export default app;
