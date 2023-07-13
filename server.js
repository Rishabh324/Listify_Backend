const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require('./app');
dotenv.config({ path: './config.env' })

const PORT = process.env.PORT || 8000;

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB)
    .then(() => console.log("connected database"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log("Listening port");
})