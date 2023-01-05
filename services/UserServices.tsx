import { useEffect } from "react";
import { parseCookies } from "nookies";

export function WelcomeConsole() {
  console.log(
    "Seja muito bem vindo!\nPagina desenvolvida com carinho por:\n\n   🎀[̲̅D][̲̅u][̲̅s][̲̅k]🎀   \n\nVisite meu portfólio em:\nhttps://github.com/MoonDusk1996"
  );
}
export function UserData() {
  useEffect(() => {
    
    const largura =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const altura =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

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
        body: JSON.stringify({
          total_time: totalTime,
          theme_name: parseCookies().user_theme,
          screen_size: `${largura}x${altura}`,
          visited_links: localStorage.getItem("VL"),
        }),
      });
      return undefined;
    });
  });
}
