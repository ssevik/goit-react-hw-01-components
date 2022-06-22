import { Profile } from 'components/profile/Profile';

import users from 'components/profile/user.json';

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
    </>
  );
};
