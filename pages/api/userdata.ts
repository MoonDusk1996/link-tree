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
    const webhook = await webhookClient.send({
      "content": null,
      "embeds": [
        {
          "title": "Novo acesso no \"My link tree\"!",
          "color": 3407616
        },
        {
          "title": "Detalhes de localização:",
          "description": `Latitude: ${req.headers['x-vercel-ip-latitude']}\nLongitude: ${req.headers['x-vercel-ip-longitude']}\nPaís: ${req.headers['x-vercel-ip-country']}\nRegião: ${req.headers['x-vercel-ip-country-region']}\nTime zone: ${req.headers['x-vercel-ip-timezone']}\nLocalização aproximada: https://www.google.com/maps/place/${req.headers['x-vercel-ip-latitude']},${req.headers['x-vercel-ip-longitude']}`,
          "url": "https://www.google.com/maps/place/${latitude},${longitude}",
        },
        {
          "title": "Detalhes técnicos:",
          "description": `Tempo online: ${req.body.totalTime / 1000} segundos\nAcessado de: ${req.headers['x-requested-with'] === undefined?"Desconhecido":req.headers['x-requested-with']}\nIP público: ${req.headers['x-real-ip']}\n user-agent: ${req.headers['user-agent']}`,
        },
        {
          "title": "Detalhes brutos:",
          "description": JSON.stringify(req.headers, null, 10),
        }
      ],
      "attachments": []
    });
    res.status(200).json('');
  } catch (error) {
    res.status(503).json({ status: 503 });
  }
}

