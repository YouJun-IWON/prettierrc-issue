"use client";
import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

import { test_dataset_1 } from "@/test/dataset-1";
import { test_API_Data } from "@/test/api";

const EvaluateSheet = () => {
  const targetData = test_dataset_1;

  // const { table } = useDatasetTable();

  console.log(targetData);

  //! react-query 사용해서 통신 다단계 설정 완료하기 =>

  return (
    <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
      <SheetHeader>
        <SheetTitle>Run Evaluations</SheetTitle>
        <SheetDescription>These evaluations will on every row of the dataset.</SheetDescription>
      </SheetHeader>

      <Link href="#" className="ml-10 -mb-6 text-blue-500">
        + Add an evaluation
      </Link>
      <div
        className="grid gap-4 py-4 custom-scrollbar overflow-y-scroll max-h-[400px] p-2"
        style={{ maxHeight: "calc(100% - 200px)" }}
      >
        {test_API_Data.map((items, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <div className="flex gap-2 items-center">
                  <Button asChild variant="link" size="smIcon" className="text-black">
                    <Play strokeWidth={1} />
                  </Button>

                  <CardTitle className="text-xl">{items.name}</CardTitle>
                </div>
                <CardDescription>{items.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {items.input.map((item, idx) => (
                    <Badge key={idx}>{item}</Badge>
                  ))}
                  <Badge variant="destructive">{items.llm}</Badge>
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
  );
};

export default EvaluateSheet;
