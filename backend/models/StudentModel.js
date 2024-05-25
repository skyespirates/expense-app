const conn = require('../utils/db')

const getStudentList = () => {
    const sql = 'SELECT id, name, age FROM student'
    const values = []
    return conn.execute(sql, values)
}

const getStudentById = (studentId) => {
    const sql = 'SELECT id, name, age FROM student WHERE id = ?'
    const values = [studentId]
    return conn.execute(sql, values)
}

const addStudent = ({name, age}) => {
    const sql = 'INSERT INTO student (name, age) VALUES (?, ?)'
    const values = [name, age]
    return conn.execute(sql, values)
}

const updateStudent = ({studentId, name, age}) => {
    let sql = 'UPDATE student SET '
    const values = []
    if(name) {
        values.push(name)
        sql += 'name = ? '
        if(age) {
            sql += ', '
        }
    }
    if(age) {
        values.push(age)
        sql += 'age = ? '
    }
    values.push(studentId)
    sql += 'WHERE id = ?'

    return conn.execute(sql, values)
}

const deleteStudent = (studentId) => {
    const sql = 'DELETE FROM student WHERE id = ?'
    const values = [studentId]
    return conn.execute(sql, values)
}


module.exports = {
    getStudentList,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}