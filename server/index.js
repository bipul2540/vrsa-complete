import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import contactRoutes from "./routes/contactUs.js";
import { apiLimiter } from "./middleware/apiLImiter.js";
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/students.js";
import marksRoutes from "./routes/marks.js";
import bookRoutes from "./routes/books.js";
import studentCoursesRoutes from './routes/studentCourses.js'

import pythonRoutes from "./routes/PythonRoutes.js";

/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/*=============================================== */

//ROUTES CONGIFUGARATION

app.use("/api/contact-us", apiLimiter, contactRoutes);
app.use("/api/user", authRoutes);

app.use("/api/students", studentRoutes);
app.use("/api/marks", marksRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/courses", studentCoursesRoutes);
app.use("/api/python", pythonRoutes);

/*================================================= */

/* MONGOOES SERTUP */
const PORT = process.env.PORT || 6001;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
