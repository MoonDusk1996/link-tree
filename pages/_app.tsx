import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppThemeProvider } from "../contexts/themecontext";
import { UserData, WelcomeConsole } from "../services/UserServices";

export default function App({ Component, pageProps }: AppProps) {
  WelcomeConsole();
  UserData();

  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
}
