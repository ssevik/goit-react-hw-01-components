import PropTypes from 'prop-types';

import { Item, Status, Name, AvatarImg } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(frend => (
        <Item key={frend.id}>
          <Status isOnline={frend.isOnline} />
          <AvatarImg src={frend.avatar} alt={frend.name} width="48" />
          <Name>{frend.name}</Name>
        </Item>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
