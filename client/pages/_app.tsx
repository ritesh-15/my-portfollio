import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../app/store"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import { useRefresh } from "../hooks"
import { SnackbarProvider } from "notistack"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Provider store={store}>
        <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
          <Component {...pageProps} />
          <RefreshComponent />
        </SnackbarProvider>
      </Provider>
    </>
  )
}

function RefreshComponent() {
  useRefresh()
  return <></>
}

export default MyApp
