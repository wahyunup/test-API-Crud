import express from "express"
import fileupload from "express-fileupload"
import cors from "cors"
import productRoute from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use(productRoute);

app.listen(5000, ()=> console.log('Server running in port: 5000'));