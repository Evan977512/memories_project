import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ linit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ linit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://emdwlekr:rladudcks91@cluster0.wuba1f8.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
