import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);


    const theme = {
      darkTheme: darkTheme,
      toggleTheme: () => {
        if (darkTheme === false) setDarkTheme(true);
        else setDarkTheme(false);
      },
    //   dark: {
    //     backgroundColor: red,
    //     color: blue,
    //   }
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;



