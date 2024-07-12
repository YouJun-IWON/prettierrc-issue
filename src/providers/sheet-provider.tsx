"use client";

import { useEffect, useState } from "react";

import EvaluateChooseSheet from "@/components/sheets/text-datasets/evaluate-choose-sheet";
import EvaluateDetailSheet from "@/components/sheets/text-datasets/evaluate-detail-sheet";
import EvaluationSheet from "@/components/sheets/text-datasets/evaluate-sheet";

export const SheetProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EvaluationSheet />
      <EvaluateChooseSheet />
      <EvaluateDetailSheet />
    </>
  );
};
