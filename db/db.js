import faunadb from 'faunadb'

const faunaClient = new faunadb.Client({
  secret: process.env.API_KEY
})

module.exports = faunaClient

