"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { CircleMinus, CirclePlus, Play, Settings } from "lucide-react";
import { test_API_Data } from "@/test/api";
import { useSheet } from "@/store/useSheetStore";

import useApiStore from "@/store/useEvaluationStore";

const EvaluateChooseSheet = () => {
  const { onOpen, isOpen, onClose, type, data } = useSheet();
  const isModalOpen = isOpen && type === "showChooseEvalTool";
  const { default_API, active_API, addToActive } = useApiStore();

  const handleAddToActive = (api: (typeof test_API_Data)[number]) => {
    if (active_API.length < 5) {
      addToActive([api]);
    }
  };

  const isApiSelected = (api: (typeof test_API_Data)[number]) => {
    return active_API.some(activeApi => activeApi.address === api.address);
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={onClose}>
      <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
        <SheetHeader>
          <SheetTitle>Evaluation List</SheetTitle>
          <SheetDescription>These evaluations will on every row of the dataset.</SheetDescription>
        </SheetHeader>
        {active_API.length <= 4 ? (
          <p className="ml-10 -mb-6 ">Select the evaluation tool you want to use. Now : {active_API.length}</p>
        ) : (
          <p className="ml-10 -mb-6 text-red-500 ">The evaluation tool is full.</p>
        )}
        <div
          className="grid gap-4 py-4 custom-scrollbar overflow-y-scroll max-h-[400px] p-2"
          style={{ maxHeight: "calc(100% - 200px)" }}
        >
          {default_API.map((items, idx) => {
            const isSelected = isApiSelected(items);
            if (isSelected) return null;

            return (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle className="text-xl">{items.name}</CardTitle>

                  <CardDescription>{items.desc}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between">
                  <div className="flex gap-2">
                    {items.input.map((item, idx) => (
                      <Badge variant="secondary" key={idx}>
                        {item}
                      </Badge>
                    ))}
                    <Badge variant="destructive">{items.llm}</Badge>
                  </div>
                  <Button
                    asChild
                    variant="link"
                    size="smIcon"
                    className={`${
                      active_API.length >= 5 ? "text-gray-400 cursor-not-allowed" : "text-blue-500 cursor-pointer"
                    }`}
                    onClick={() => handleAddToActive(items)}
                    disabled={active_API.length >= 5}
                  >
                    <CirclePlus strokeWidth={1} />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <SheetFooter>
          <Button onClick={() => onOpen("showEvalTool")} className="w-full" type="submit">
            Back to Evaluations
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EvaluateChooseSheet;
