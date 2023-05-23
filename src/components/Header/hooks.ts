import { useAuthContext } from '@providers/AuthProvider';

export const useHeader = () => {
  const { signOut, user } = useAuthContext();

  const handleLogout = () => {
    signOut();
  };

  return { handleLogout, user };
};
