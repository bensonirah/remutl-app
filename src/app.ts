import express, { Request, Response } from "express";
import { remultExpress } from "remult/remult-express";

const port = 3000;
const app = express();

app.use(remultExpress());

app.get("/hy", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hi there!",
  });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
