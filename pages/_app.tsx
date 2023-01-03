import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/themecontext";
import UserProvider from "../services/UserContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </AppThemeProvider>
  );
}
