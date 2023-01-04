import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/themecontext";
import useFetch from "../hooks/useFetch";

export default function App({ Component, pageProps }: AppProps) {
  const data = useFetch()
  return (
    <AppThemeProvider>
        <Component {...pageProps} />
    </AppThemeProvider>
  );
}
