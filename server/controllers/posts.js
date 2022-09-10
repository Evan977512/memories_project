// create all handlers for routes
// hanels all logics on routes/posts.js
// in order to keep the logic visible....

// import model
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    //return result
    res.status(200).json(postMessages);
  } catch (error) {
    res.satus(404).json({ errorMessage: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  // create new PostMessage object and save it in newPost
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    // https://www.restapitutorial.com/httpstatuscodes.html

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ errorMessage: error.message });
  }
};
