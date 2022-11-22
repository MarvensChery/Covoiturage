const knex = require('knex')({
  client: 'mssql',
  connection: {
    host: '127.0.0.1\\sqlexpress',
    user: 'xxx',
    password: 'xxx',
    database: 'covoiturage',
    options: {
      enableArithAbort: false,
    },
  },
  pool: { min: 0, max: 7 },
});
