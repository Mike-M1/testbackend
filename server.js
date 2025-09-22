import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/hello", (req, res) => {
    res.json({ messsage: "Hello World"});
});

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));