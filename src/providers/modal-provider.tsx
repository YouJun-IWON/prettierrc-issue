"use client";

import ShowAPIResult from "@/components/modal/datasets/evaluate-result-model";
import GenerateData from "@/components/modal/datasets/generate-data-model";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ShowAPIResult />
      <GenerateData />
    </>
  );
};
