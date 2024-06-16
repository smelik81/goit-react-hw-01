import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <div className={css.container}>
      <ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.listItem} key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
