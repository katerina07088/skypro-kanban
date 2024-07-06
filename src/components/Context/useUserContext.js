import { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

export const useUserContext = () => {
  return useContext(UserContext);
};