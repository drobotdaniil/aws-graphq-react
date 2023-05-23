import { useCallback, useEffect, useMemo, useState } from 'react';

import { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth, Hub } from 'aws-amplify';

export const useAuth = () => {
  const [user, setUser] = useState<CognitoUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAuthUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (err) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthUser();

    const authListener = Hub.listen('auth', async ({ payload: { event } }) => {
      switch (event) {
        case 'signIn':
          await fetchAuthUser();
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'signUp_failure':
          if (user) {
            setUser(null);
          }
          break;
        case 'signUp':
        case 'forgotPassword':
        case 'forgotPasswordSubmit':
        case 'forgotPasswordSubmit_failure':
        case 'forgotPassword_failure':
          break;
        default:
          await fetchAuthUser();
      }
    });

    return () => {
      authListener();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = useCallback(async () => Auth.signOut(), []);

  const value = useMemo(
    () => ({ user, isLoading, signOut }),
    [user, isLoading, signOut],
  );

  return value;
};
