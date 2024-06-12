import React, {useState, useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Light, Dark, Theme} from './color'; // Assuming Light, Dark, and Theme are defined in colors.ts
// import { useDispatch, useSelector } from 'react-redux';
// import { setTheme } from '../actions/reduxAction';
// import { RootState } from '../types'; // Assuming RootState is defined to match your Redux store structure

interface AppContextType {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

// Create the context
export const AppContext = React.createContext<AppContextType | null>(null);

const AppContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  //   const dispatch = useDispatch();
  //   const { selectTheme } = useSelector((state: RootState) => state?.redState); // Assuming RootState is your root state type
  const [theme, changeTheme] = useState<Theme>(Dark);

  //   useEffect(() => {
  //     changeTheme(selectTheme);
  //     dispatch(setTheme(selectTheme));
  //   }, [dispatch, selectTheme]);

  return (
    <AppContext.Provider value={{theme, changeTheme}}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
