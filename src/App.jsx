import userdata from "./userdata.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

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
      <TransactionHistory items={transactions} />
    </div>
  );
}
