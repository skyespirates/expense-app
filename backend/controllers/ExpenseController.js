const ExpenseModel = require('../models/ExpenseModel')

const getAllExpenses = async (request, reply) => {
      try {
            const [rows, fields] = await ExpenseModel.getAllExpense(1)
            return reply.response(rows);
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const getExpenseById = async (request, reply) => {
      try {
            const [rows, fields] = await ExpenseModel.getExpenseById({expenseId: 3, userId: 2})
            return reply.response(rows)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const addExpense = async (request, reply) => {
      const {title, amount} = request.payload;
      try {
            const [rows, _] = await ExpenseModel.addExpense({title, amount, user_id: 1})
            return reply.response(rows)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const updateExpense = async (request, reply) => {
      const {expenseId} = request.params;
      const {title, amount} = request.payload;
      try {
            const [rows, _] = await ExpenseModel.updateExpense({expenseId, title, amount})
            return reply.response(rows)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const deleteExpense = async (request, reply) => {
      const {expenseId} = request.params;
      try {
            const [rows, _]  = await ExpenseModel.deleteExpense(expenseId)
            return reply.response(rows)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

module.exports = {
      getAllExpenses,
      getExpenseById,
      addExpense,
      updateExpense,
      deleteExpense
}