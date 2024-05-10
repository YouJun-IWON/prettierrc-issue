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
import useEvaluationServer from "@/hooks/getDatasetResult/useEvaluationAPI";
import { useDatasetTable } from "@/store/useDatasetTable";

const EvaluateSheet = () => {
  const { isOpen, onClose, type, data } = useSheet();
  const isModalOpen = isOpen && type === "showEvalTool";
  const { dataset } = data;
  const { setAddress, setAddressName } = useDatasetTable();

  //const { mutate: sendData, isPending } = useEvaluationServer();

  const handleSubmit = (address: string) => {
    console.log("address", dataset);

    const result = useSendData(dataset, address);

    if (!result) return;
    onClose();

    //sendData(result);

    return null;
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={onClose}>
      <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
        <SheetHeader>
          <SheetTitle>Run Evaluation List</SheetTitle>
          <SheetDescription>These evaluations will on every row of the dataset.</SheetDescription>
        </SheetHeader>

        {/* <Link href="#" className="ml-10 -mb-6 text-blue-500">
          + Add an evaluation
        </Link> */}
        <p className="ml-10 -mb-6 text-red-500">Up to 5. To add one, remove one.</p>
        <div
          className="grid gap-4 py-4 custom-scrollbar overflow-y-scroll max-h-[400px] p-2"
          style={{ maxHeight: "calc(100% - 200px)" }}
        >
          {test_API_Data.map((items, idx) => {
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
                          handleSubmit(items.address);
                        }}
                      >
                        <Play strokeWidth={1} />
                      </Button>

                      <CardTitle className="text-xl">{items.name}</CardTitle>
                    </div>

                    <Button asChild variant="link" size="smIcon" className="text-red-500 cursor-pointer">
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
                    {/* <Input type="number" min="0" max="1" step="0.1" defaultValue="0.5" className="w-20" /> */}

                    <Settings strokeWidth={1} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full" type="submit">
              Run Evaluations
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EvaluateSheet;
