import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router } from "./routes/terrorist.routes.js";
dotenv.config();

const port= process.env.PORT_SERVER


const app = express()

app.use(cors())
app.use(express.json())


app.use('/', router)


app.listen(port, () => {
    console.log("running on port 5001... ")
})

