import express from "express";
import bcrypt from "bcrypt";
import userModel from "../../models/User/User.js";

const router = express.Router();

router.get("/getallusers", async (req, res) => {
  try {
    let allUsers = await userModel.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.get("/getuser/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let user = await userModel.findOne({_id:id});
    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.get("/totalusers", async (req, res) => {
  try {
    let total = await userModel.countDocuments();
    res.status(200).json({ msg: `There are a total of ${total} users.` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    let userInput = req.body;
    userInput.password = await bcrypt.hash(userInput.password, 10);
    await userModel.create(userInput);
    res
      .status(201)
      .json({
        msg: `Hello ${userInput.name}, you are registered successfully!`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/registermulti", async (req, res) => {
  try {
    let userInput = req.body;
    userInput.forEach(async (x) => {
      x.password = await bcrypt.hash(x.password, 10);
      await userModel.create(x);
    });

    res
      .status(201)
      .json({
        msg: `Hello ${userInput}, you are registered successfully!`,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/updateuser", async (req, res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error});
    }
});

export default router;