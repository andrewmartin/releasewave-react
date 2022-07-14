import { createContext, ReactNode, useContext } from 'react';

const AppContext = createContext({});

interface AppWrapperProps {
  children: ReactNode;
}

export function AppWrapper(props: AppWrapperProps) {
  const { children } = props;

  const sharedState = {
    /* whatever you want */
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
