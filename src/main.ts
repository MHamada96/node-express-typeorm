import express, { Application, Request, Response, NextFunction } from "express";

const app = express();

const sayHello = (req: Request, res: Response) => {
  res.send("Hello from server ");
};

app.get("/status", sayHello);

app.listen(5000, () => {
  console.log("We are up@running");
});
