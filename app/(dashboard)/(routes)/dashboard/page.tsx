"use client";

import { Card } from "@/components/ui/card";
import { tools } from "@/constants";
import {
  ChatBubbleIcon,
  ArrowRightIcon,
  PlayIcon,
  ImageIcon,
  VideoIcon,
  CodeIcon,
} from "@radix-ui/react-icons";

import { NextPage } from "next";
import { useRouter } from "next/navigation";

type Props = {};

const DashboardPage: NextPage = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl mb:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI. MAIt is a powerful AI that can do
          anything...
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition duration-200 ease-in-out cursor-pointer group"
          >
            <div className="flex justify-center items-center gap-x-4">
              <div className="flex items-center gap-x-4">
                <div className={`p-2 w-full rounded-md ${tool.bgColor}`}>
                  <tool.icon className={`w-8 h-8 ${tool.color}`} />
                </div>
              </div>
              <p className="font-semibold text-left">{tool.label}</p>
            </div>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition duration-200 ease-in-out" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
