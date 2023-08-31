"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("50c764e6-fbdb-43d9-a35e-ca03562048a3");
  }, []);

  return null;
};
