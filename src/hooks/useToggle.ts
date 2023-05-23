import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [on, setOn] = useState(initialState);

  const toggle = useCallback((nextState: boolean) => {
    setOn(nextState);
  }, []);

  const open = useCallback(() => {
    setOn(true);
  }, []);

  const close = useCallback(() => {
    setOn(false);
  }, []);

  return {
    on,
    open,
    close,
    toggle,
  };
};
