const ExpenseController = require('../controllers/ExpenseController');
const Joi = require('joi');

const routes = [
  {
    method: 'GET',
    path: '/expenses',
    handler: ExpenseController.getAllExpenses,
  },
  {
      method: 'GET',
      path: '/expenses/{expenseId}',
      handler: ExpenseController.getExpenseById,
      config: {
            validate: {
                  failAction: (request, reply, error) => {
                        throw error;
                  },
                  params: Joi.object().keys({
                        expenseId: Joi.number().required()
                  })
            }
      }
  },
  {
      method: 'POST',
      path: '/expenses',
      handler: ExpenseController.addExpense,
      config: {
            validate: {
                  failAction: (request, reply, error) => {
                        throw error;
                  },
                  payload: Joi.object().keys({
                        title: Joi.string().required(),
                        amount: Joi.number().required()
                  })
            }
      }
  },
  {
      method: 'PUT',
      path: '/expenses/{expenseId}',
      handler: ExpenseController.updateExpense,
      config: {
            validate: {
                  failAction: (request, reply, error) => {
                        throw error;
                  },
                  params: Joi.object().keys({
                        expenseId: Joi.number().required()
                  }),
                  payload: Joi.object().keys({
                        title: Joi.string().optional().allow('', null),
                        amount: Joi.number().optional().allow(null)
                  })
            }
      }
  },
  {
      method: 'DELETE',
      path: '/expenses/{expenseId}',
      handler: ExpenseController.deleteExpense,
      config: {
            validate: {
                  failAction: (request, reply, error) => {
                        throw error;
                  },
                  params: Joi.object().keys({
                        expenseId: Joi.number().required()
                  })
            }
      }
  },
];

module.exports = routes;
