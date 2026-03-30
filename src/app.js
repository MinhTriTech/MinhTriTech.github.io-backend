import "dotenv/config";

import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profileRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});