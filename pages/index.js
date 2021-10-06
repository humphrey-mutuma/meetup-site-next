import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS  = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg",
//     address: "Some address 11 , 569 some city",
//     description: " This is the first meetup",
//   },
//   {
//     id: "m2",
//     title: "A second Meetup",
//     image:
//       "https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg",
//     address: "Some address 20 , 7995 some city",
//     description: " This is the second meetup",
//   },
// ];

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta name="description" 
        content="Browse a huge list of higlty active react content" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//  . // fetch data from an API
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://humphrey:pAeBg1LyDNPlHTN2@cluster0.wb1bs.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
