import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  runtime: "edge",
};

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("API key not provided", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt not provided", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount not provided", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution not provided", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("API limit reached", { status: 403 });
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) await increaseApiLimit();

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.error("IMAGE ERROR!", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}