"use client";

import { useEffect, useState } from "react";
import EvaluationSheet from "@/components/sheets/datasets/dataset/evaluate-sheet";
import EvaluateChooseSheet from "@/components/sheets/datasets/dataset/evaluate-choose-sheet";
import EvaluateDetailSheet from "@/components/sheets/datasets/dataset/evaluate-detail-sheet";

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
