import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url"; //Allow us to set path when we configure directory
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url); //So we can grab file url specifically when we use modules.
const __dirname = path.dirname(__filename); //Only when we use type module_struct
dotenv.config();
const app = express(); //Invoke express to use middleware
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets"))); //Where we store our images or assets.

/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage }); //Help us save  files locally

/* ROUTES WITH FILES */
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);
//verifyToken: Check tokens and expose your routes such that whenever you need to call an authenticated route you'll be checking the token first
//then you'll expose the route.

/* ROUTES */
app.use("/auth", authRoutes); //Setup auth routes
app.use("/users", userRoutes); //Setup user routes
app.use("/posts", postRoutes); //Setup post routes

//process.env = used to get the user environment
const PORT = process.env.PORT || 6001; //Go to 6001 if 3001 doesn't work
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, //useNewUrlParser: To opt in to using the MongoDB driver's new connection management engine
    useUnifiedTopology: true, //useUnifiedTopology: Removes support for several connection options that are no longer relevant with the new topology engine
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

     //So that data don't get duplicated
    //  User.insertMany(users);
    //  Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

  /*
  (npm i express: for our libraries),
  (body-parser:to process the request body),
  (bcrypt: for password encryption),
  (cors: cross origin request), 
  (dotenv: for environment variables), 
  (gridfs-stream: for file upload), 
  (multer multer-gridfs-storage: to upload file locally), 
  (helmet: for safety), (morgon: for login), 
  (jsonwebtoken: for authentication), 
  (mongoose: for mongo)
*/