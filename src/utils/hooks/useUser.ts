import { useAppSelector } from 'store';
import * as selectors from 'store/user/userSelectors';

export const useUser = () => {
  const owner = useAppSelector(selectors.selectOwner);
  const user = useAppSelector(selectors.selectUser);
  const userList = useAppSelector(selectors.selectUserList);
  const pagination = useAppSelector(selectors.selectPagination);
  const checkedUsers = useAppSelector(selectors.selectChecked);
  const appendix = useAppSelector(selectors.selectAppendix);
  const edit = useAppSelector(selectors.selectEdit);

  const email = useAppSelector(selectors.selectUserEmail);
  const city = useAppSelector(selectors.selectUserCity);
  const phone = useAppSelector(selectors.selectUserPhone);
  const status = useAppSelector(selectors.selectUserStatus);
  const profileInfo = { email, city, phone, status };

  const loading = useAppSelector(selectors.selectLoading);
  const error = useAppSelector(selectors.selectError);

  return {
    owner,
    user,
    profileInfo,
    userList,
    pagination,
    checkedUsers,
    appendix,
    edit,

    loading,
    error,
  };
};
