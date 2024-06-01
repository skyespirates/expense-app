const StudentController = require('../controllers/StudentController')
const Joi = require('joi')

module.exports = [
    {
        method: 'GET',
        path: '/students',
        handler: StudentController.getStudentList,
        config: {
            validate: {
                failAction: (request, h, err) => {
                    throw err;
                },
                query: Joi.object().keys({
                    name: Joi.string().optional().allow('', null),
                    age: Joi.number().optional().allow(null),
                })
            }
        }
    },
    {
        method: 'GET',
        path: '/students/{studentId}',
        handler: StudentController.getStudentById,
        config: {
            validate: {
                failAction: (request, h, err) => {
                    throw err
                },
                params: Joi.object().keys({
                    studentId: Joi.number().required()
                })
            }
        }
    },
    {
        method: 'POST',
        path: '/students',
        handler: StudentController.addStudent,
        config: {
            validate: {
                failAction: (request, h, err) => {
                    throw err
                },
                payload: Joi.object().keys({
                    name: Joi.string().optional().allow('', null),
                    age: Joi.number().optional().allow('', null)
                })
            }
        }
    },
    {
        method: 'PUT',
        path: '/students/{studentId}',
        handler: StudentController.updateStudent,
        config: {
            validate: {
                failAction: (request, h, err) => {
                    throw err
                },
                params: Joi.object().keys({
                    studentId: Joi.number().required()
                }),
                payload: Joi.object().keys({
                    name: Joi.string().optional().allow('', null),
                    age: Joi.number().optional().allow(null)
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: '/students/{studentId}',
        handler: StudentController.deleteStudent,
        config: {
            validate: {
                failAction: (request, h, err) => {
                    throw err
                },
                params: Joi.object().keys({
                    studentId: Joi.number().required()
                })
            }
        }
    }
]