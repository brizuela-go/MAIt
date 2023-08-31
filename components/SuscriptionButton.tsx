"use client";

import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";

type Props = {
  isPro: boolean;
};

const SuscriptionButton = ({ isPro = false }: Props) => {
  const [loading, setLoading] = useState(false);
  const onSubscribe = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/api/stripe");

      window.location.href = response.data.url;
    } catch (error) {
      console.log("BILLING ERROR: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onSubscribe}
    >
      {isPro ? "Manage Suscription" : "Upgrade"}
      {!isPro && <LightningBoltIcon className="w-4 h-4 ml-2" />}
    </Button>
  );
};

export default SuscriptionButton;
