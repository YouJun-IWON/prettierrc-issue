import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const GenerateDataFormSchema = z.object({
  true_description: z
    .string()
    .min(1, "True description is required")
    .max(1000, "True Description must be 1000 characters or less"),
  false_description: z
    .string()
    .min(1, "False description is required")
    .max(1000, "False Description Name must be 1000 characters or less"),
});

const Classification = () => {
  //const { mutate: sendData, isPending } = useCreateEvalAPI();
  const form = useForm<z.infer<typeof GenerateDataFormSchema>>({
    resolver: zodResolver(GenerateDataFormSchema),
    defaultValues: {
      true_description: "",
      false_description: "",
    },
  });

  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  function onSubmit(data: z.infer<typeof GenerateDataFormSchema>) {
    const { true_description, false_description } = data;

    if (true_description === false_description) {
      setDuplicateError(
        "True description and false description cannot be the same.",
      );
    } else {
      setDuplicateError(null);

      //const transformedData = transformData(data);
      //console.log("generate_data", transformedData);
      //sendData(transformedData);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pass / Fail Classifier</CardTitle>
        <CardDescription>
          Please fill out the information below. The more detailed, the better
          performance.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4 max-h-[400px] overflow-auto p-2 custom-scrollbar">
              <FormField
                control={form.control}
                name="true_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>True Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter true description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="false_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>False Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter false description"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {duplicateError && <p className="text-red-500">{duplicateError}</p>}
            {/* <Button className="w-full" type="submit" disabled={!!duplicateError}>
              {isPending ? (
                <div className="flex items-center gap-2">
                  <Loader /> Creating...
                </div>
              ) : (
                "Submit"
              )}
            </Button> */}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Classification;
