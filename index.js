import express, { json } from "express";
import connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';

const app = express();
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

connection();
app.use(json({limit :"100mb"}))
app.use(cors());
app.use('/', routes);


app.listen(PORT, () => console.log(`Your app is listening at port ${PORT}`));

