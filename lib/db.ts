import mysql from 'mysql2/promise';

// Credenciais só pelo ambiente (.env.local / variáveis do Vercel): nunca no código, que vai para o GitHub.
// Uma única pool por processo (o dev do Next recarrega módulos; guardar no globalThis evita abrir várias)
const g = globalThis as unknown as { poolHomepage?: mysql.Pool };

export const pool =
  g.poolHomepage ??
  (g.poolHomepage = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT) || 3306,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'homepage',
    waitForConnections: true,
    connectionLimit: 5,
    connectTimeout: 15000,
    dateStrings: true,
  }));
