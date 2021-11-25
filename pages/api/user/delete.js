import { query as q, Documents, Collection } from "faunadb";

import faunaClient from "../../../db/db";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.send("shame");
    return;
  }

  const { id, password} = req.body
  if (!id) {
    res.send("SHAME. ENTER THE ONE TO BE SHAMED UPON");
    return;
  }

  if (password !== process.env.PASSWORD_WEBSITE) {
    res.send("SHAME. BEGONE BEFORE I SEND IN A POLICE ASSAULT");
    return;
  }

  const docReference = q.Ref(
    q.Collection('fuckup-counter'),
    id
  )

  const deletePlayer = await faunaClient
    .query(
      q.Delete(docReference)
    )
    .catch((err) => {
      res.send(err);
    });

  if (!deletePlayer) {
    return;
  }

  return deletePlayer.data
};
