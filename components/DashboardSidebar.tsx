"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import {
  TokensIcon,
  ChatBubbleIcon,
  ImageIcon,
  VideoIcon,
  CodeIcon,
  PlayIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import FreeCounter from "./FreeCounter";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: TokensIcon,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: ChatBubbleIcon,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: PlayIcon,
    href: "/music",
    color: "text-emerald-700",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: GearIcon,
    href: "/settings",
  },
];

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const DashboardSidebar = ({ apiLimitCount = 0, isPro = false }: Props) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" layout="fill" />
          </div>
          <h1 className={`text-2xl font-bold ${montserrat.className}`}>MAIt</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={`${
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              } text-sm groip flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition duration-200 ease-in-out`}
            >
              <div className="flex items-center ">
                <route.icon
                  className={`
                        h-5 w-5 mr-3 ${route.color}
                        `}
                />
              </div>
              {route.label}
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  );
};

export default DashboardSidebar;
