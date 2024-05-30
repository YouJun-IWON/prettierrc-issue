"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

import { useModal } from "@/store/useModalStore";

import Classification from "./custom-eval/classification";
import { useCreateEval } from "@/store/useCreateEvalStore";
import PassFail from "./custom-eval/passfail";
import Score from "./custom-eval/score";

const CustomEvaluation = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "customEvaluation";
  const { setType, type: generateType } = useCreateEval();

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>Create Custom Evalution</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center">
            <Tabs
              defaultValue="/create-classification-evaluation"
              className="w-[600px]"
              onValueChange={value => setType(value)}
            >
              <TabsList className="grid w-full grid-cols-3 bg-slate-300">
                <TabsTrigger value="/create-classification-evaluation">Classification</TabsTrigger>
                <TabsTrigger value="/create-score-evaluation">Score</TabsTrigger>
                <TabsTrigger value="/create-passfail-evaluation">Pass / Fail</TabsTrigger>
              </TabsList>
              <TabsContent value="/create-classification-evaluation">
                <Classification />
              </TabsContent>
              <TabsContent value="/create-score-evaluation">
                <Score />
              </TabsContent>
              <TabsContent value="/create-passfail-evaluation">
                <PassFail />
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CustomEvaluation;
