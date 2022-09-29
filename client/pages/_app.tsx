import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { useRefresh } from "../hooks";
import { SnackbarProvider } from "notistack";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#070707",
      light: "#070707",
      dark: "#070707",
    },
    secondary: {
      main: "#070707",
      light: "#070707",
      dark: "#070707",
    },
  },
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <Component {...pageProps} />
          <RefreshComponent />
        </SnackbarProvider>
      </Provider>
    </ThemeProvider>
  );
}

function RefreshComponent() {
  useRefresh();
  return <></>;
}

export default MyApp;
