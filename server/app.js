import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import "./utils/dbConnect.js";
import userRouter from "./controllers/user/index.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    try {
        res.status(200).json({msg:`Server is running fine`});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error});
    }
});

app.use("/user", userRouter);

app.listen(port, ()=>{
    console.log(`Server is up and running on: http://localhost:${port}`);
});