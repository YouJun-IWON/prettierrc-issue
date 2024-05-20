"use client";

import CustomEvaluation from "@/components/modal/text-datasets/custom-evaluation-modal";
import ShowAPIResult from "@/components/modal/text-datasets/evaluate-result-modal";
import GenerateData from "@/components/modal/text-datasets/generate-data-modal";
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
      <CustomEvaluation />
    </>
  );
};
