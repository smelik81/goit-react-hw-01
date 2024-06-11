import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.profileWrapper}>
        <img className={css.profileImage} src={image} alt={`${name} avatar`} />
        <p className={css.userName}>{name}</p>
        <p className={css.userTag}>@{tag}</p>
        <p className={css.userLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileTitle}>Followers</span>
          <span className={css.profileSubTitle}>{stats.followers}</span>
        </li>

        <li className={css.profileItem}>
          <span className={css.profileTitle}>Views</span>
          <span className={css.profileSubTitle}>{stats.views}</span>
        </li>

        <li className={css.profileItem}>
          <span className={css.profileTitle}>Likes</span>
          <span className={css.profileSubTitle}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
