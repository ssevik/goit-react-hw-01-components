import PropTypes from 'prop-types';
import {
  Profiles,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  StatsList,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  src,
  name,
  tag,
  location,
  likes,
  views,
  followers,
}) => {
  return (
    <Profiles>
      <Description>
        <Avatar src={src} alt={name} width="100" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsList>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsList>
        <StatsList>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsList>
      </Stats>
    </Profiles>
  );
};

Profile.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
