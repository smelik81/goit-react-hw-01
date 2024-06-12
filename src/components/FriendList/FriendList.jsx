import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

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
