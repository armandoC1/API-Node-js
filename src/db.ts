import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'User123$',
    database: 'api_node'
});

connection.connect((err) =>{
    if(err){
        console.log('Error al conectar con mysql: ', err);
        return;
    }
    console.log('conectado a la bd');
});

export default connection;
