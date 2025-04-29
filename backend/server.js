require("dotenv").config();
const express = require("express");
const { json } = express;
const { connect } = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.use("/contact", contactRoutes);

connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
