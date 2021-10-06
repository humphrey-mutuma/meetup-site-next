import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetails
      title="A First Meetup"
      address="Some Street 5 , Some city"
      description="The meetup description"
      image="https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        address: "Some Street 5 , Some city",
        description: "The meetup description",
        image:
          "https://cdn.pixabay.com/photo/2021/04/29/05/04/desert-6215516__340.jpg",
      },
    },
  };
}
