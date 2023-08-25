import { createGlobalStyle } from "styled-components";
import { useThemeContext } from "../Contexts/ThemeContext";

const ApplicationStyles = () => {
    const { themeColors } = useThemeContext();
  
    const GlobalStyle = createGlobalStyle`
      :root {
      --TextXSmall: 0.66rem;
      --TextSmall: 0.83rem;
      --TextMedium: 1.1rem;
      --TextLarge:  1.25rem;
      --TextXLarge: 1.33rem;
        ${Object.entries(themeColors)
          .map(([key, value]) => `--${key}: ${value};`)
          .join('\n')}
          
      }
  
      *, *::before, *::after {
        box-sizing: border-box;
      }
  
      * {
        font-family: 'Roboto', sans-serif;
      }
  
      body, html {
        margin: 0;
        min-height: 100vh;
        width: 100%;
        height: 100%;
      }
    `;
  
    return <GlobalStyle />;
  };
  
export default ApplicationStyles; 
