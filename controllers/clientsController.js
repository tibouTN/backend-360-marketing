import client from "../models/clientModels.js";


export const getClients = async (req, res, next) => {
  try {
    const clients = await Client.find();
    res.status(200).json({
      success: true,
      data: clients,
    });
  } catch (error) {
    next(error);
  }
};


export const getClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      const error = new Error("Client not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({
      success: true,
      data: client,
    });
  } catch (error) {
    next(error);
  }
};


export const updateClient = async (req, res, next) => {
  try {
    const { name, email, role } = req.body;

    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true, runValidators: true } // return updated doc
    );

    if (!client) {
      const error = new Error("Client not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Client updated successfully",
      data: client,
    });
  } catch (error) {
    next(error);
  }
};


export const deleteClient = async (req, res, next) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      const error = new Error("Client not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      success: true,
      message: "Client deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
import Client from "../models/clientModels.js"; // adjust the path if needed


export const addClient = async (req, res, next) => {
  try {
    const client = new Client(req.body); // build a new client from request body
    const savedClient = await client.save(); // save to MongoDB

    res.status(201).json({
      success: true,
      message: "Client added successfully",
      data: savedClient,
    });
  } catch (error) {
    next(error);
  }
};

