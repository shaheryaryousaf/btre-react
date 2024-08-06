import { useSelector } from 'react-redux';
import { selectedUserInfo } from '../api/authSlice';

export const useAuth = () => {
  const userInfo = useSelector(selectedUserInfo);
  return { isLoggedIn: !!userInfo, userInfo };
};
