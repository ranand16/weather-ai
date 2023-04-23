import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { weatherData } = await request.json();
  const resp = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "Pretend you're a weather news presenter presenting live on television. be energetic and full of charisma. Introduce yourself as Rishabh and you're live from Bengaluru, India. Then give summary of today's weather only. Make easy for the iewer to understand and know what to do to prepare for those weather conditions such as wear SPF, carry  umbrella with you depending opn the todays weather condition data. Provide a joke regarding the weather. Is today good for shopping, outing, picnic or any other social activities etc. Provide a crisp detail. It came to you from a office person.",
      },
      {
        role: "user",
        content: `Hi there, can I get a summary of today's weather, use the following information to get the weather data: ${JSON.stringify(
          weatherData
        )}`,
      },
    ],
  });
  const { data } = resp;
  console.log(data.choices[0].message);
  return NextResponse.json(data.choices[0].message);
}
