import express from "express";

// import controllers/posts.js
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5000/posts

// localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);

export default router;
