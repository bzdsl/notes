/** @format */

import express from "express";
import noteRoutes from "./routes/nodeRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;
connectDB();

// middleware
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} and url is ${req.url}`);
//   next();
// });

app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port http://localhost:" + PORT);
});

//mongodb+srv://manutdfc012:i7IlhFEsGSeIfEja@cluster0.dsg1ict.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
