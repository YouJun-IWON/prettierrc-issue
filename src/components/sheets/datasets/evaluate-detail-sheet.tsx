"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTestAPIConfigsStore } from "@/store/useAPIConfigStore";

import { useSheet } from "@/store/useSheetStore";
import { useEffect, useState } from "react";

const EvaluateDetailSheet = () => {
  const { onOpen, isOpen, onClose, type, data } = useSheet();
  const isModalOpen = isOpen && type === "showDetailEvalTool";
  const { configs, updateConfig, setConfigs } = useTestAPIConfigsStore();
  const { items } = data;

  const existingConfig = configs.find(config => config.name === items?.name);

  const [failureThreshold, setFailureThreshold] = useState(
    existingConfig ? Number(existingConfig.failure_threshold) : 0.5,
  );
  const [keywords, setKeywords] = useState(existingConfig ? existingConfig.keywords : [""]);

  useEffect(() => {
    const existingConfig = configs.find(config => config.name === items?.name);
    setFailureThreshold(existingConfig ? Number(existingConfig.failure_threshold) : 0.5);
  }, [configs, items]);

  useEffect(() => {
    setKeywords(existingConfig ? existingConfig.keywords : [""]);
  }, [configs, items]);

  if (!items) return;

  const defaultFailureThreshold = existingConfig ? Number(existingConfig.failure_threshold) : failureThreshold;

  const inputs = [...items.input];
  const outputs = [...items.output];

  const hasFailureThreshold = inputs.includes("failure_threshold");

  const hasKeywords = inputs.includes("keywords");

  const handleFailureThresholdChange = (value: number[]) => {
    setFailureThreshold(value[0]);
  };

  const handleKeywordChange = (index: number, value: string) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const handleAddKeyword = () => {
    if (keywords.length < 6) {
      setKeywords([...keywords, ""]);
    }
  };

  const handleRemoveKeyword = (index: number) => {
    const newKeywords = [...keywords];
    newKeywords.splice(index, 1);
    setKeywords(newKeywords);
  };

  //! Config handling
  const handleSaveSetting = () => {
    const configIndex = configs.findIndex(config => config.name === items.name);

    // console.log("configIndex", configIndex);

    if (configIndex !== -1) {
      //console.log("check1", configs[configIndex]);

      if (hasFailureThreshold) {
        const updatedConfig = {
          ...configs[configIndex],
          failure_threshold: failureThreshold.toFixed(1),
          keywords: [""],
        };
        updateConfig(configIndex, updatedConfig);
      } else if (hasKeywords) {
        const updatedConfig = {
          ...configs[configIndex],
          failure_threshold: "",
          keywords,
          //keywords: [""],
        };
        updateConfig(configIndex, updatedConfig);
      }

      //console.log("configs", configs);
    } else {
      //console.log("check2");
      if (hasFailureThreshold) {
        const newConfig = {
          name: items.name,
          failure_threshold: failureThreshold.toFixed(1),
          keywords: [""],
        };
        setConfigs([...configs, newConfig]);
      } else if (hasKeywords) {
        const newConfig = {
          name: items.name,
          failure_threshold: "",
          keywords,
        };
        setConfigs([...configs, newConfig]);
      }
    }
    console.log("configs", configs);
    onOpen("showEvalTool");
  };

  return (
    <Sheet open={isModalOpen} onOpenChange={onClose}>
      <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
        <div className="flex flex-col gap-6">
          <SheetHeader>
            <SheetTitle>{items.name}</SheetTitle>
            <SheetDescription>{items.detail_desc}</SheetDescription>
          </SheetHeader>
          <Separator />

          <div className="flex flex-col gap-4">
            <p>Inputs :</p>
            <div className="flex flex-wrap gap-2">
              {inputs.map((item, idx) => (
                <Badge variant="secondary" key={idx}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <p>Outputs :</p>
          <div className="flex flex-wrap gap-2">
            {outputs.map((item, idx) => (
              <Badge variant="secondary" className={cn(idx === 0 && "bg-yellow-400")} key={idx}>
                {item}
              </Badge>
            ))}
          </div>

          <Separator />

          <div className="flex flex-col gap-4 ">
            <p>Configuration Parameters : </p>
            {hasFailureThreshold && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-sm">Failure Threshold :</p>
                  <p className="text-sm">{failureThreshold}</p>
                </div>
                <Slider
                  onValueChange={handleFailureThresholdChange}
                  defaultValue={[defaultFailureThreshold]}
                  max={1}
                  min={0}
                  step={0.1}
                />
              </div>
            )}

            {hasKeywords && (
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="text-sm">Keywords :</p>
                </div>
                {keywords.map((keyword, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={keyword}
                      onChange={e => handleKeywordChange(index, e.target.value)}
                      className="flex-1"
                    />
                    {keywords.length > 1 && (
                      <Button onClick={() => handleRemoveKeyword(index)} variant="destructive">
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                {keywords.length < 6 && (
                  <Button className="w-40" onClick={handleAddKeyword}>
                    Add Keyword
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        <SheetFooter>
          <Button onClick={handleSaveSetting} className="w-full" type="submit">
            Save Setting & Back to Evaluations
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default EvaluateDetailSheet;
