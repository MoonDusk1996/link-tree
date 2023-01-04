import { useEffect } from "react";
import { setCookie, parseCookies } from "nookies";

export function WelcomeConsole() {
  console.log(
    "Seja muito bem vindo!\nPagina desenvolvida com carinho por:\n\n   🎀[̲̅D][̲̅u][̲̅s][̲̅k]🎀   \n\nVisite meu portfólio em:\nhttps://github.com/MoonDusk1996"
  );
}
export function UserData() {

  useEffect(() => {
    const timeOnOpen = new Date().getTime();
    window.addEventListener("beforeunload", function (e) {
      e.preventDefault();
      const timeOnClose = new Date().getTime();
      const totalTime = timeOnClose - timeOnOpen;
      fetch("./api/userdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ totalTime: totalTime }),
      });
      return undefined;
    });
  });
}
