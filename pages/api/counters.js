import { query as q } from 'faunadb'

import faunaClient from '../../db/db'

export default async (req, res) => {
  const docs = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('fuckup-counter'))),
      q.Lambda(x => q.Get(x))
    )
  )

  const counters = docs.data.map(entry => ({
    ref: entry.ref.id,
    ...entry.data
  }))

  res.json(counters)
}

