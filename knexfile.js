module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/teamsters'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/teamsters'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
