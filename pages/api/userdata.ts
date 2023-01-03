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
  try {
    const webhook = await webhookClient.send({
      embeds: [
        {
          title: "Acesso no My link tree",
          description: req.headers.host,
          color: "32896",
        },
      ],
    });
    res.status(200).json({ headers: req.headers });
  } catch (error) {
    res.status(503).json({ status: 503 });
  }
}
