"use client";

import { useEffect, useState } from "react";
import EvaluationSheet from "@/components/sheets/datasets/dataset/evaluate-sheet";

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
    </>
  );
};
