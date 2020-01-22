const { Pool } = require('pg');

const PG_URI = 'postgres://ovecjave:kkr1xhgea-46fL94n3frWHdbbxp0L9NX@rajje.db.elephantsql.com:5432/ovecjave';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
