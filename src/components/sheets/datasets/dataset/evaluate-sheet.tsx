import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const test_API_Data = [
  {
    name: "Context Sufficiency",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["query", "context"],
    output: "passfail",
    llm: "gpt-4-turbo",
  },
  {
    name: "No people names",
    desc: "Checks the response according to your grading criteria",
    input: ["response"],
    output: "passfail",
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Ragas Faithfulness",
    desc: "Measures the factual consistency of the generated answer against the given context.",
    input: ["query", "context", "response"],
    output: "Ragas Faithfulness",
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Answer Completeness",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["query", "response"],
    output: "passfail",
    llm: "gpt-4-turbo",
  },
];

const EvaluateSheet = () => {
  return (
    <SheetContent className="min-w-[600px] flex flex-col py-10 justify-between">
      <SheetHeader>
        <SheetTitle>Run Evaluations</SheetTitle>
        <SheetDescription>These evaluations will on every row of the dataset.</SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4 overflow-y-scroll  max-h-[400px] p-2" style={{ maxHeight: "calc(100% - 200px)" }}>
        {test_API_Data.map((items, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Run Evaluations</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default EvaluateSheet;
