import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
/*verifyToken: Returns the payload decoded if the signature is valid and optional expiration, audience
, or issuer are valid. If not, it will throw the error.*/

const router = express.Router();//Create a new router object

/* READ */
router.get("/:id", verifyToken, getUser); // we can call the database with that particular id
router.get("/:id/friends", verifyToken, getUserFriends); //Call userFriends

/* UPDATE */
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
