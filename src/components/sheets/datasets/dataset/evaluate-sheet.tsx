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
import { CircleMinus, Play, Settings } from "lucide-react";
import { test_API_Data } from "@/test/api";
import { useSheet } from "@/store/useSheetStore";

import useSendData from "@/hooks/getDatasetResult/useSendData";

import { useDatasetTable } from "@/store/useDatasetTableStore";
import useApiStore from "@/store/useEvaluationStore";
import { useEffect } from "react";
import { useTestDatasetStore } from "@/store/useTestDatasetStore";
import useEvaluationServer from "@/hooks/getDatasetResult/useEvaluationAPI";
import { useTestAPIConfigsStore } from "@/store/useAPIConfigStore";

const EvaluateSheet = () => {
  const { onOpen, isOpen, onClose, type } = useSheet();
  const isModalOpen = isOpen && type === "showEvalTool";

  const { setAddress, setAddressName } = useDatasetTable();
  const { dataset } = useTestDatasetStore();
  const { configs, updateConfig, setConfigs } = useTestAPIConfigsStore();

  const { mutate: sendData, isPending } = useEvaluationServer();
  const { active_API, setDefault_API, addToActive, removeFromActive } = useApiStore();

  useEffect(() => {
    setDefault_API(test_API_Data);
    const firstFiveAPIs = test_API_Data.slice(0, 5);
    addToActive(firstFiveAPIs);
  }, []);

  const handleSubmit = (address: string, addressName: string) => {
    const result = useSendData(dataset, address, configs, addressName);

    console.log("result", result);

    if (!result) return;
    onClose();

    sendData(result);

    return null;
  };

  const handleRemoveFromActive = (api: (typeof test_API_Data)[number]) => {
    removeFromActive(api);
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={onClose}>
      <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
        <SheetHeader>
          <SheetTitle>Run Evaluation List</SheetTitle>
          <SheetDescription>These evaluations will on every row of the dataset.</SheetDescription>
        </SheetHeader>

        {active_API.length >= 5 ? (
          <p className="ml-10 -mb-6 text-red-500">Up to 5. To add one, subtract one. </p>
        ) : (
          <Button
            variant="link"
            className="justify-start ml-10 -mb-6 text-blue-500 w-fit"
            onClick={() => onOpen("showChooseEvalTool")}
          >
            + Add an evaluation
          </Button>
        )}

        <div
          className="grid gap-4 py-4 custom-scrollbar overflow-y-scroll max-h-[400px] p-2"
          style={{ maxHeight: "calc(100% - 200px)" }}
        >
          {active_API &&
            active_API.map((items, idx) => {
              return (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <Button
                          asChild
                          variant="link"
                          size="smIcon"
                          className="text-black cursor-pointer"
                          onClick={async () => {
                            setAddress(items.address);
                            setAddressName(items.name);
                            handleSubmit(items.address, items.name);
                          }}
                        >
                          <Play strokeWidth={1} />
                        </Button>

                        <CardTitle className="text-xl">{items.name}</CardTitle>
                      </div>

                      <Button
                        asChild
                        variant="link"
                        size="smIcon"
                        className="text-red-500 cursor-pointer"
                        onClick={() => handleRemoveFromActive(items)}
                      >
                        <CircleMinus strokeWidth={1} />
                      </Button>
                    </div>
                    <CardDescription>{items.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        {items.input.map((item, idx) => (
                          <Badge variant="secondary" key={idx}>
                            {item}
                          </Badge>
                        ))}
                        <Badge variant="destructive">{items.llm}</Badge>
                      </div>

                      <Button
                        size="smIcon"
                        asChild
                        variant="link"
                        className="cursor-pointer"
                        onClick={() => onOpen("showDetailEvalTool", { items })}
                      >
                        <Settings strokeWidth={1} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {active_API.length >= 6 ? (
              <p className="w-full text-center text-red-500">Up to five simultaneous assessments are available. </p>
            ) : (
              <Button className="w-full" type="submit">
                Run Evaluations
              </Button>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EvaluateSheet;
