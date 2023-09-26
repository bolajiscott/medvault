import express from "express";
import router from "./routes/index.mjs";
import { connectDB } from "./config/database.mjs";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use("/api", router);
console.log(port);

await connectDB();
app.listen(port, () => {
  console.log("Application started on", port);
});
