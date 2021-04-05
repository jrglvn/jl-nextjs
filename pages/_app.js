import React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme } from "../styles/ThemeConfig";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

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
