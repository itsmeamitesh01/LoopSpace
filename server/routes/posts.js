import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
/*verifyToken: Returns the payload decoded if the signature is valid and optional expiration, audience
, or issuer are valid. If not, it will throw the error.*/

const router = express.Router(); //Create a new router object

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
