import connection from "../db";

export class Student {
    static createTable() {
        const query = `CREATE TABLE IF NOT EXISTS students(
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(300),
            apellido VARCHAR(300),
            codigo VARCHAR(100),
            grado VARCHAR(100)
        )`;
        connection.query(query, (err) => {
            if (err) {
                console.log('error en crear la bd', err);
            }
        });
    }

    static create(nombre: string, apellido: string, codigo: string, grado: string, callback: (err: any, result?: any) => void) {
        const query = 'INSERT INTO students (nombre, apellido, codigo, grado) VALUES (?, ?, ?, ?)';
        connection.query(query, [nombre, apellido, codigo, grado], callback);
    }

    static getAll(callback: (err: any, result?: any) => void) {
        connection.query('SELECT*FROM students', callback);
    }

    static getById(id: number, callback: (err: any, result?: any) => void) {
        const query = 'SELECT*FROM students WHERE id = ?';
        connection.query(query, [id], callback);
    }

    static update(id: number, nombre: string, apellido: string, codigo: string, grado: string, callback: (err: any, result?: any) => void) {
        const query = 'UPDATE students SET nombre = ?, apellido = ?, codigo = ?, grado = ? WHERE id = ?';
        connection.query(query, [nombre, apellido, codigo, grado, id], callback);
    }

    static delete(id: number, callback: (err: any, result?: any) => void) {
        const query = 'DELETE FROM students WHERE id = ?';
        connection.query(query, [id], callback);
    }



}