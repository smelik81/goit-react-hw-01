import css from "./FriendList.module.css";

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <div className={css.friendListWraper}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.friendListName}>{name}</p>
      <p className={isOnline ? css.online : css.ofline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
}
