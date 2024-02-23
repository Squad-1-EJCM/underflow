import express from "express";
import configDotenv from "./src/config/dotenv";
import cors from "cors";
import router from "./src/routes/routes";

configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8081",
    credentials: true,
    maxAge: 5,
  })
);
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(
    `${process.env.APP_NAME} app listening at http://localhost:${port}`
  );
});
