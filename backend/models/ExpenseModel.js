const conn = require('../utils/db');

const getAllExpense = (userId) => {
      const query = 'SELECT e.title, e.amount, u.name FROM expense e JOIN user u ON e.user_id = u.id WHERE u.id = ?'
      const params = [userId]
      return conn.execute(query, params)
};

const getExpenseById = ({expenseId, userId}) => {
      const query = 'SELECT e.title, e.amount, u.name FROM expense e JOIN user u ON e.user_id = u.id WHERE e.id = ? AND u.id = ?'
      const params = [expenseId, userId]
      return conn.execute(query,params)
};

const addExpense = ({ title, amount, user_id }) => {
      const query = 'INSERT INTO expense (title, amount, user_id) VALUES (?, ?, ?)'
      const params = [title, amount, user_id]
      return conn.execute(query, params)
};

const updateExpense = ({ expenseId, title, amount }) => {
      let query = 'UPDATE expense SET '
      const params = []
      if(title) {
            query += 'title = ? '
            params.push(title)
      }
      if(amount) {
            params.push(amount)
            const amountIndex = params.indexOf(amount)
            query += amountIndex===0 ? 'amount = ? ' : ', amount = ? '
      }
      query += 'WHERE id = ?'
      params.push(expenseId)
      console.log('update query', query)
      return conn.execute(query, params)
};

const deleteExpense = (expenseId) => {
      const query = 'DELETE FROM expense WHERE id = ?'
      const params = [expenseId]
      return conn.execute(query, params)
};

module.exports = {
  getAllExpense,
  getExpenseById,
  addExpense,
  updateExpense,
  deleteExpense,
};
