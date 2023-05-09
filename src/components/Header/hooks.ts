import { useAuthContext } from '@providers/AuthProvider';

export const useHeader = () => {
  const { signOut } = useAuthContext();

  const handleLogout = () => {
    signOut();
  };

  return { handleLogout };
};
