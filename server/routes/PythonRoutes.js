import { PythonShell } from "python-shell";
import express from "express";

const router = express.Router();

let options = {
  scriptPath:
    "C:/Users/user/Desktop/collage project-2/Result-analysis/server/routes",
};

router.get("/first", (req, res) => {
  PythonShell.run("main.py", options).then((messages) => {
    res.status(200).json({ data: messages });
  });
});

export default router;
