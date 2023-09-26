import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index.mjs";
import { connectDB } from "./config/database.mjs";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);
console.log(port);

await connectDB();
app.listen(port, () => {
  console.log("Application started on", port);
});
