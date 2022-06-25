import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import users from 'components/profile/user.json';
import data from 'components/Statistics/data.json';
import friend from 'components/FriendList/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
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
    </>
  );
};
