import userdata from "./userdata.json";
import friends from "./friends.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";

export default function App() {
  return (
    <div>
      <>
        <Profile
          name={userdata.username}
          tag={userdata.tag}
          location={userdata.location}
          image={userdata.avatar}
          stats={userdata.stats}
        />
      </>
      <FriendList friends={friends} />
    </div>
  );
}
