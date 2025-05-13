// pages/api/create.js
import { createConnection } from 'mysql2/promise';

// Função para conectar no MySQL
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });    
}

export default async function handler(req, res ) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const userdata = req.body;
    console.log(userdata)

    const {nome, email} = userdata;

    if (!nome || !email) {
        return res.status(400).json({ error: 'nome e email são obrigatórios no request body.' });
    }
    try {
        // Conecta no banco
        const connection = await connectToDatabase();

        // Executa a query para transacionar dados da tabela "users"
        const [result] = await connection.execute('INSERT INTO users (nome, email) VALUES (?, ?)', [
            nome,
            email,
        ]);
        // Check se o usuário existe

        // Encerra a conexão
        await connection.end ();

        // Respond with the user data
        res.status(201).json({ id: result.insertId, message: 'Usuário criado com sucesso!' });
     } catch (error) {
        console.error('Erro de conexão com o banco:', error);
        res.status(500).json({ error: 'Erro interno do Servidor' });
     }
    }


    

