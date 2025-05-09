import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: "Backend Hackaton Educative Page",
    author: "Sebaxsus",
    version: "Preview",
    description: "WASAAAAAAAAAAAAAA!!!!!!",
  });
});

routes(app);

export default app;
