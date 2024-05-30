import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";

import { useFieldArray, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect, useState } from "react";

const GenerateDataFormSchema = z.object({
  scores: z.array(
    z.object({
      score_value: z.number().min(0).max(30),
      description: z
        .string()
        .min(1, "Description is required")
        .max(1000, "Description Name must be 1000 characters or less"),
    }),
  ),
});

const Classification = () => {
  //const { mutate: sendData, isPending } = useCreateEvalAPI();
  const form = useForm<z.infer<typeof GenerateDataFormSchema>>({
    resolver: zodResolver(GenerateDataFormSchema),
    defaultValues: {
      scores: [{ score_value: 0, description: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "scores",
    control: form.control,
  });

  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  useEffect(() => {
    const subscription = form.watch(value => {
      const values = value.scores?.map(item => item?.score_value) || [];
      const duplicates = values.filter((value, index) => values.indexOf(value) !== index);

      if (duplicates.length > 0) {
        setDuplicateError(`Duplicate score values found: ${duplicates.join(", ")}`);
      } else {
        setDuplicateError(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  const handleAddScore = () => {
    if (fields.length < 5) {
      append({ score_value: 0, description: "" });
    }
  };

  function onSubmit(data: z.infer<typeof GenerateDataFormSchema>) {
    const values = data.scores.map(item => item.score_value);
    const duplicates = values.filter((value, index) => values.indexOf(value) !== index);

    if (duplicates.length > 0) {
      setDuplicateError(`Duplicate score values found: ${duplicates.join(", ")}`);
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
        <CardTitle>Score Classifier</CardTitle>
        <CardDescription>
          Please fill out the information below. The more detailed, the better performance.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-2 mt-4">
                  <div className="grid grid-cols-3 gap-2 items-center">
                    <FormField
                      control={form.control}
                      name={`scores.${index}.score_value`}
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              min={0}
                              max={30}
                              step={1}
                              value={field.value}
                              onChange={e => field.onChange(e.target.valueAsNumber)}
                              placeholder="Enter score value"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>
                      Remove
                    </Button>
                  </div>
                  <FormField
                    control={form.control}
                    name={`scores.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea {...field} placeholder="Enter description" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              {fields.length < 5 && (
                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={handleAddScore}>
                  Add Score
                </Button>
              )}
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
