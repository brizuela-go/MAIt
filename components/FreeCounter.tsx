"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { useProModalStore } from "@/hooks/use-pro-modal";

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const FreeCounter = ({ apiLimitCount = 0, isPro = false }: Props) => {
  const [mounted, setMounted] = useState(false);
  const proModal = useProModalStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isPro) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations Remaining
            </p>
          </div>
          <Progress
            className="h-3"
            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
          />
          <Button
            onClick={proModal.onOpen}
            className="mt-4 w-full hover:opacity-90 hover:shadow-xl transition duration-200 ease-in-out active:scale-95"
            variant={"premium"}
          >
            Upgrade to Pro
            <LightningBoltIcon className="h-4 w-4 ml-2 " />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
