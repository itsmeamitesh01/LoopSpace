import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      return res.status(403).send("Access Denied");
    }

    if (token.startsWith("Bearer ")) { //Token will be starting with and we will be taking everything from the right of bearer i.e the token will be placed after the space in bearer.
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // user is verified.
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
