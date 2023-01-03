import type { NextApiRequest, NextApiResponse } from "next";
const Discord = require("discord.js");
const webhookClient = new Discord.WebhookClient({
  id: process.env.DISCORD_ID,
  token: process.env.DISCORD_TOKEN,
});

type Data = {
  data: undefined | {} | unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const latitude = req.headers['x-vercel-ip-latitude']
    const longitude = req.headers['x-vercel-ip-longitude']

    const webhook = await webhookClient.send({
      embeds: [
        {
          title: 'Novo acesso no "My link tree"',
          description:
            "Detalhes do Acesso:\n\r" + JSON.stringify(req.headers, null, 10),
          color: "32896",
          url:`https://www.google.com/maps/place/${latitude},${longitude}`
        },
      ],
    });
    res.status(200).json({ status: 200 });
  } catch (error) {
    res.status(503).json({ status: 503 });
  }
}
