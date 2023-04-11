import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://umndwiex:zRt-mNNgfheUMFti8hkeHZA2836OjIlo@suleiman.db.elephantsql.com/umndwiex",
  });
  global.connection = pool;
  return pool.connect();
}

export {
  connect,
};
