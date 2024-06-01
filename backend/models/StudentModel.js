const conn = require('../utils/db')

const getStudentList = ({name, age}) => {
    let sql = 'SELECT id, name, age FROM student '
    const values = []
    if(name) {
        sql += 'WHERE name like ? '
        values.push(`%${name}%`)
    }
    if(age) {
        const studentAge = parseInt(age)
        values.push(studentAge)
        const index = values.findIndex(studentAge)
        sql += index === 0 ? 'WHERE age = ?' : 'AND age = ?'
    }

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