import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg",
    address: "Some address 11 , 569 some city",
    description: " This is the first meetup",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg",
    address: "Some address 20 , 7995 some city",
    description: " This is the second meetup",
  },
];

export default function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
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

export async function getStaticProps(){
return{
  props:{
    meetups:DUMMY_MEETUPS
  },
  revalidate:10
}
}
