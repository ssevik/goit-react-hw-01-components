import { Container } from 'components/common/Container.styled';
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import users from '../Data/user.json';
import data from '../Data/data.json';
import friend from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        src={users.avatar}
        name={users.username}
        tag={users.tag}
        location={users.location}
        likes={users.stats.likes}
        views={users.stats.views}
        followers={users.stats.followers}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
