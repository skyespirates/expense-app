const StudentModel = require('../models/StudentModel')

const getStudentList = async (request, reply) => {
    const {name, age} = request.query;
    try {
        const [rows, _] = await StudentModel.getStudentList({name, age})
        return reply.response(rows)
    } catch (error) {
        console.error("An error occurred:", error);
        return reply.response("Internal Server Error").code(500);
    }
}

const getStudentById = async (request, reply) => {
    const {studentId} = request.params;
    try {
        const [rows, _] = await StudentModel.getStudentById(studentId)
        return reply.response(rows)
    } catch (error) {
        console.error("An error occurred:", error);
        return reply.response("Internal Server Error").code(500);
    }
}

const addStudent = async (request, reply) => {
    const {name, age} = request.payload
     try {
        const [rows, _] = await StudentModel.addStudent({name, age})
        return reply.response(rows)
    } catch (error) {
        console.error("An error occurred:", error);
        return reply.response("Internal Server Error").code(500)
    }
}

const updateStudent = async (request, reply) => {
    const {studentId} = request.params;
    const {name, age} = request.payload;
    try {
        const [rows, _ ] = await StudentModel.updateStudent({studentId, name, age})
        return reply.response(rows)
    } catch (error) {
        console.error("An error occurred:", error);
        return reply.response("Internal Server Error").code(500);
    }
}

const deleteStudent = async (request, reply) => {
    const {studentId} = request.params;
    try {
        const [rows, _] = await StudentModel.deleteStudent(studentId)
        return reply.response(rows)
    } catch (error) {
        console.error("An error occurred:", error);
        return reply.response("Internal Server Error").code(500);
    }
}



module.exports = {
    getStudentList,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}