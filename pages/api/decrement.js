import { query as q } from 'faunadb'
import faunaClient from '../../db/db'

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.send('shame')
    return
  }

  const { id, password } = req.body
  if (!id) {
    res.send('No id specified')
    return
  }

  if (password !== process.env.PASSWORD_WEBSITE) {
    res.send('SHAME. BEGONE BEFORE I SEND IN A POLICE ASSAULT')
    return
  }

  const docReference = q.Ref(
    q.Collection('fuckup-counter'),
    id
  )

  const decrement = await faunaClient.query(
    q.Update(
      docReference,
      {
        data: {
          count: q.Add(
            q.Select(
              ['data', 'count'],
              q.Get(docReference)
            ),
            -1
          )
        }
      }
    )
  ).catch(() => {
    res.send('oopsie doopsie, error happened, probably because the id doesn\'t exist, so stop gloving around :)')
  })

  if (!decrement) {
    return
  }

  res.json(decrement.data)
}

