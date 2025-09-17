import Expense from "../models/income.model.js"; // adjust the path


export const createExpens = async (req, res, next) => {
  try {
    const income = new Expense(req.body);
    const savedExpense = await Expense.save();
    res.status(201).json({ success: true, data: savedExpense });
  } catch (error) {
    next(error);
  }
};


export const getexpense = async (req, res, next) => {
  try {
    const expense = await expense.find();
    res.status(200).json({ success: true, data: expense });
  } catch (error) {
    next(error);
  }
};


export const getexpenseById = async (req, res, next) => {
  try {
    const expense = await expense.findById(req.params.id);
    if (!income) {
      const error = new Error("expense not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: income });
  } catch (error) {
    next(error);
  }
};


export const updateExpense = async (req, res, next) => {
  try {
    const updatedExpense = await expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedExpense) {
      const error = new Error("Expense not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: updatedExpense });
  } catch (error) {
    next(error);
  }
};


export const deleteExpense = async (req, res, next) => {
  try {
    const deletedExpense = await expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      const error = new Error("Expense not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, message: "Expense deleted successfully" });
  } catch (error) {
    next(error);
  }
};
