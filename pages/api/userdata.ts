import type { NextApiRequest, NextApiResponse } from "next";
const Discord = require("discord.js");
const webhookClient = new Discord.WebhookClient({
  id: process.env.DISCORD_ID,
  token: process.env.DISCORD_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.headers.host);
  if (req.headers.host === "my-link-tree-moondusk1996.vercel.app") {
    const webhook = await webhookClient.send({
      embeds: [
        {
          title: "Acesso no My link tree",
          description: `Um novo acesso foi feito pelo link do Instagram`,
          color: "32896",
        },
      ],
    });
  }
}
