const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'node_first_api',
  password: 'Root@123',
  port: 5432,
})
