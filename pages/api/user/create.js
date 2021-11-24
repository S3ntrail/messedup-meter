import { query as q, Documents, Collection } from "faunadb";

import faunaClient from "../../../db/db";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.send("shame");
    return;
  }

  const player = req.body.player;
  const password = req.body.password;
  const regex = /[^A-z\s\d][\\\^]?/g

  if (!player) {
    res.send("SHAME. ENTER THE ONE TO BE SHAMED UPON");
    return;
  }

  if (player.match(regex)) {
    res.send("SHAME. NO SPECIAL CHARACTERS ALLOWED");
    return;
  }

  if (password !== process.env.PASSWORD_WEBSITE) {
    res.send("SHAME. BEGONE BEFORE I SEND IN A POLICE ASSAULT");
    return;
  }

  const docReference = q.Collection("fuckup-counter");

  const createPlayer = await faunaClient
    .query(
      q.Create(docReference, {
        data: {
          count: 0,
          id: player,
          name: player[0].toUpperCase() + player.slice(1),
        },
      })
    )
    .catch((err) => {
      res.send(err);
    });

  if (!createPlayer) {
    return;
  }

  return createPlayer.data
};
