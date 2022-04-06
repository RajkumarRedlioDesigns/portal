import express from "express"
import mongoose from "mongoose"


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 7878;

app.listen(PORT, () => console.log(`Server Running on PORT : ${PORT}`))