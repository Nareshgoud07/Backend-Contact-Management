const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Contact Management API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const connectDB = require("./config/db");

connectDB();
const contactRoutes = require("./routes/contactRoutes");
app.use("/contacts", contactRoutes);
