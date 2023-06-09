const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.port || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Hello, world !");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));