import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/themecontext";
import User from "../services/User";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <User />
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
