import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

export default function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch("https://react-api-36ad5-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
        navigate('/');
    });
  }

  return (
    <section>
      <h1>Add New MeetupPage</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
