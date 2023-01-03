import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/themecontext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
