// page / api / read.js
import { createConnection } from "mysql2";

// função para conectar no MySql
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

    export default async function handler(req, res) {
        if (req.method !== 'GET') {
            return res.status(405).json({ error: 'Método não permitido'});
        }
        
    try {
        // Conexão no MySql
        const connection = await connectToDatabase();

        // Execução da query para receber dados da tabela "users"
        const [rows] = await connection.promise().query('SELECT * FROM users', );

        // Verificar se o usuário existe
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
          }

        // Fechar a conexão
        await connection.end();
        
        // Resposta com os dados do usuário
        res.status(200).json(rows);
      } catch (error) {
        console.error('Erro de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro interno do Servidor' });
      }    
   }

    

