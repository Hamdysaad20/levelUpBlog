import { Request, Response } from "express";
import Item from "../../db/models/users";

//Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Item.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Get a single user by id
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await Item.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new Item(req.body);
    await user.save();
    res.status(201).json(user);
    console.log("User created successfully");
  } catch (error) {
    res.status(500).send(error);
    console.log("Error creating user");
  }
};

//Update a user by id
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

//Delete a user by id
export const deleteUser = async (req: Request, res: Response) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};
