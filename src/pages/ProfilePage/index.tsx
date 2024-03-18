import classNames from 'classnames';
import H1 from 'components/ui/Typography/H1';

import s from './index.module.scss';

const ProfilePage = () => {
  return <H1 className={classNames('container', s.profile)}>Profile Page</H1>;
};

export default ProfilePage;