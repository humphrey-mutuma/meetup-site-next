import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

   const client = await MongoClient.connect(
     "mongodb+srv://humphrey:pAeBg1LyDNPlHTN2@cluster0.wb1bs.mongodb.net/meetups?retryWrites=true&w=majority"
   );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const results = await meetupsCollection.insertOne({
      data,
    });
    console.log(results);
    client.close();

    res.status(201).json({message:'meetup inserted!'})
  }
}

export default handler;
