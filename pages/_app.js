import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/ThemeConfig";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
