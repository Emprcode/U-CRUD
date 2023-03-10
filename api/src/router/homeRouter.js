import express from "express";
import {
  deleteUser,
  getUser,
  postUser,
  updateUser,
} from "../model/user/UserModel.js";

const router = express.Router();

// CRUD operation

//create
router.post("/", async (req, res, next) => {
  try {
    const result = await postUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "user Created successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to add user, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//get
router.get("/", async (req, res, next) => {
  try {
    
    const result = await getUser();
    console.log(result)
    res.json({
      status: "success",
      message: "All user Successfully received",
      result,
    });
  } catch (error) {
    next(error);
  }
});

//update
router.put("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;
    // console.log(req.body)

    const filter = _id;
    const userObj = rest;
    const result = await updateUser(filter, userObj);
    // console.log(result)

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to update user, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

//delete

router.delete("/", async (req, res, next) => {
  try {
    const { _id } = req.body;

    const filter = _id;
    const result = await deleteUser(filter);

    result?._id
      ? res.json({
          status: "success",
          message: "user deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to update user, Please try again later",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
