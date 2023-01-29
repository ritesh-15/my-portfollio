import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
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
      <SnackbarProvider autoHideDuration={3000} maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </>
  )
}

export default MyApp
