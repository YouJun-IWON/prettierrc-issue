"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import React from "react";

import { useModal } from "@/store/useModalStore";

const ShowAPIResult = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "showAPIResult";

  const { api_result } = data;

  console.log("api_result", api_result);

  if (!api_result) return;

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Test type : {api_result.display_name && api_result.display_name}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {api_result.failed !== undefined && <p>Failed : {api_result.failed ? "true" : "false"}</p>}
            {api_result.agreement_score !== undefined && <p>Agreement score : {api_result.agreement_score}</p>}

            {api_result.contradiction_score !== undefined && (
              <p>Contradiction score : {api_result.contradiction_score}</p>
            )}

            {api_result.hallucination_score !== undefined && (
              <p>Hallucination score : {api_result.hallucination_score}</p>
            )}

            {api_result.grade_reason !== undefined && <p>Grade reason : {api_result.grade_reason}</p>}
            {api_result.model !== undefined && <p>Model : {api_result.model}</p>}
            {api_result.runtime !== undefined && <p>Runtime : {api_result.runtime}ms</p>}

            {api_result.similarity_score !== undefined && <p>Similarity score : {api_result.similarity_score}</p>}

            {api_result.conversation_resolution !== undefined && (
              <p>Similarity score : {api_result.conversation_resolution}</p>
            )}
            {/* {api_result.text && <p>Text : {api_result.text}</p>} */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ShowAPIResult;
