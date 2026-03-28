import "dotenv/config";

import express from "express";
import cors from "cors";

import sql from "./db.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/test", async (req, res) => {
    try {
        const result = await sql`SELECT * FROM test_names;`;
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "DB error" });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});