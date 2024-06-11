import userdata from "./userdata.json";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <>
      <Profile
        name={userdata.username}
        tag={userdata.tag}
        location={userdata.location}
        image={userdata.avatar}
        stats={userdata.stats}
      />
    </>
  );
}
