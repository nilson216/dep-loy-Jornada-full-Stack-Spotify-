// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://netohjunior216:0yopr1zsl8Fxy435@spotify.cf7v4.mongodb.net/?retryWrites=true&w=majority&appName=Spotify";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
