// pages/api/update.js
import { createConnection } from "mysql2/promise";

 // Função para conectar no MySQL
async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}

 // Rota de API update de user
export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const {id, nome, email} = req.body; 
    console.log(req.body);

    if (!id || !nome || !email) {
        return res.status(400).json({ error: 'id, nome, and email são obrigatórios no request body.' });
    }

    try {
        // Connect to the Database
        const connection = await connectToDatabase();

        // Executa a query para atualizar a tabela "users"
        const [result] = await connection.execute(
            'UPDATE users SET nome = ?, email = ? WHERE id = ?',
            [nome, email, id]
        );

        // Fecha conexão com o banco
        await connection.end();

        // Check se o update teve sucesso
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        // Resposta do server
        res.status(200).json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
        console.error('Erro de conexão com o banco', error);
        res.status(500).json({ error: 'Erro interno do servidor '});
    }
 }

