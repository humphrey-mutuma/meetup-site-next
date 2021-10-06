import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

function NewMeetupPage() {
  const route = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json ",
      },
    });
    const data = await response.json();
    console.log(data);
    route.push("/");
  };

  return (
    <>
      <Head>
        <title>add a new meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunites"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
