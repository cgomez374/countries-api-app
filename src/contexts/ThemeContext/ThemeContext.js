import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(false);


    const theme = {
      darkTheme: darkTheme,
      toggleTheme: () => {
        if (darkTheme === false) {
          setDarkTheme(true);
          document.body.style.backgroundColor = "hsl(207, 26%, 17%)";
        }
        else{
          setDarkTheme(false);
          document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
        }
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



