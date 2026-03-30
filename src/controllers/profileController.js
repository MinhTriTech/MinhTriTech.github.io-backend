import sql from "../config/db.js";

export const getInfo = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM INFO limit 1`;

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getProject = async (req, res) => {

};

export const getSkill = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM skills ORDER BY category`;

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAbout = async (req, res) => {
    try {
        const result = await sql`SELECT * FROM about_links`;

        res.status(200).json(result);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });  
    }
};