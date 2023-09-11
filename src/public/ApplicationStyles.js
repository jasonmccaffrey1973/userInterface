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
      --TextExtraBold: 800;
      --TextBold: 700;
      --TextSemiBold: 600;
      --TextRegular: 400;
      --TextLight: 300;
      --TextExtraLight: 200;
      --TextThin: 100;
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
        background-color: var(--Secondary);
        color: var(--Text);
      }
    `;
  
    return <GlobalStyle />;
  };
  
export default ApplicationStyles; 
