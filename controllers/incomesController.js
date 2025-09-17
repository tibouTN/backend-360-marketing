import Income from "../models/incomesModel.js"; // adjust the path


export const createIncome = async (req, res, next) => {
  try {
    const income = new Income(req.body);
    const savedIncome = await income.save();
    res.status(201).json({ success: true, data: savedIncome });
  } catch (error) {
    next(error);
  }
};


export const getIncomes = async (req, res, next) => {
  try {
    const incomes = await Income.find();
    res.status(200).json({ success: true, data: incomes });
  } catch (error) {
    next(error);
  }
};


export const getIncome = async (req, res, next) => {
  try {
    const income = await Income.findById(req.params.id);
    if (!income) {
      const error = new Error("Income not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: income });
  } catch (error) {
    next(error);
  }
};


export const updateIncome = async (req, res, next) => {
  try {
    const updatedIncome = await Income.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedIncome) {
      const error = new Error("Income not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, data: updatedIncome });
  } catch (error) {
    next(error);
  }
};


export const deleteIncome = async (req, res, next) => {
  try {
    const deletedIncome = await Income.findByIdAndDelete(req.params.id);
    if (!deletedIncome) {
      const error = new Error("Income not found");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ success: true, message: "Income deleted successfully" });
  } catch (error) {
    next(error);
  }
};
