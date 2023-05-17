import bcrypt from "bcrypt"; //Bcrypt: Node Js library used to hash and salt passwords
import jwt from "jsonwebtoken"; //JWT : To share information between two parties securely — a client and a server
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => { //Async so that we can api call to front end to backend then to DB. req for request body from front end and response body that we will be sending back to the DB
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body; // These parameters are being structured from the req.body. We have to send these parameters as an object.

    const salt = await bcrypt.genSalt(); // We will use this salt to encrypt our password
    const passwordHash = await bcrypt.hash(password, salt); // So that we can hash passwd with salt

    const newUser = new User({ //Encrypt the passwd, save the user and when the user try to login, we are gonna salt the passwd again to check if that is the correct one and then we will provide them with a jsonwebtoken.
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //On successful creation, user will be provided with a status report generally with 201 that tells something has been created. 
  } catch (err) {
    res.status(500).json({ error: err.message }); //On any error, front end will be given an error, generally a 500 error status report.
  }
};

/* LOGGING IN */
export const login = async (req, res) => { 
  try {
    const { email, password } = req.body; //We gonna destructure email and password.
    const user = await User.findOne({ email: email });  // From mongoose to try to find the one that has the specified email, and bring back all the user information.
    if (!user) return res.status(400).json({ msg: "User does not exist. " }); //Print the error message if the user does not exist.

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET); //Match the password saved in the database with that entered by the user. Only if user exists. Going to use the same salt to compare if they are the same hash.
    delete user.password;// Create a token basically a cookie that will be having the digital signature of the user (name or password or any other credential)
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
