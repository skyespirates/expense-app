
const getAllExpenses = async (request, reply) => {
      try {
            const connection = await request.getConnection();
            const [rows, fields] = await connection.query('SELECT * FROM student');
            connection.release();
            return reply.response(rows);
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const getExpenseById = async (request, reply) => {
      try {
            const response = {
                  message: "getExpenseById"
            }
            return reply.response(response)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const addExpense = async (request, reply) => {
      try {
            const response = {
                  message: "addExpense"
            }
            return reply.response(response)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const updateExpense = async (request, reply) => {
      try {
            const response = {
                  message: "updateExpense"
            }
            return reply.response(response)
      } catch (error) {
            return reply.response("Something went wrong!")
      }
}

const deleteExpense = async (request, reply) => {
      try {
            const response = {
                  message: "deleteExpense"
            }
            return reply.response(response)
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