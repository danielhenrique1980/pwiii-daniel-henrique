// src/app/api/create/route.js
import { createConnection } from 'mysql2/promise';

async function connectToDatabase() {
  return createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste-api',
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { nome, email } = body;

    if (!nome || !email) {
      return new Response(JSON.stringify({ error: 'nome e email são obrigatórios' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const connection = await connectToDatabase();

    const [result] = await connection.execute(
      'INSERT INTO users (nome, email) VALUES (?, ?)',
      [nome, email]
    );

    await connection.end();

    return new Response(
      JSON.stringify({ id: result.insertId, message: 'Usuário criado com sucesso!' }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Erro interno da API:', error);
    return new Response(JSON.stringify({ error: 'Erro interno do servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
