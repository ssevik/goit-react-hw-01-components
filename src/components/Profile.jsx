import PropTypes from 'prop-types';

export default function Profile({
  src,
  name,
  tag,
  location,
  likes,
  views,
  followers,
}) {
  return (
    <div>
      <div>
        <img src={src} alt={name} width="100" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  likes: PropTypes.number,
  views: PropTypes.number,
  followers: PropTypes.number,
};
