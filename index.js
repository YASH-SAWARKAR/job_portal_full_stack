import express from "express"; 
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
dotenv.config({});

const app = express();




// middleware
app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
    origin:'http//localhost:5173',
    credential:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.listen(PORT , ()=>{
    connectDB();
   console.log(`server running at PORT ${PORT}`);
})