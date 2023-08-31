"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import DashboardSidebar from "./DashboardSidebar";
import { useEffect, useState } from "react";

type Props = {
  apiLimitCount: number;
  isPro: boolean;
};

const DashboardMobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0">
        <DashboardSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileSidebar;
