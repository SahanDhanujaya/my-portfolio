import express from "express";
import router from "./service/EmailService.ts";

const app = express();
const port = process.env.PORT || 3000;

// parse JSON bodies
app.use(express.json());

// mount the email router – change the prefix if you like
app.use("/api", router);

// a simple health‑check/root route
app.get("/", (req, res) => {
  res.send("portfolio server is running");
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});