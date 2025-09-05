const { Pool } = require('pg');

const pool = new Pool({
  user: 'urban_user',
  host: 'db',
  database: 'urbango_db',
  password: 'mysecretpassword',
  port: 5432,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('✅ ¡Conexión exitosa a la base de datos!');
    client.release(); // Libera al cliente
    process.exit(0); // Finaliza el script con éxito
  } catch (err) {
    console.error('❌ Error al conectar a la base de datos:', err.message);
    process.exit(1); // Finaliza el script con un error
  }
}

testConnection();