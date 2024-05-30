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
  categories: z.array(
    z.object({
      name: z.string().min(1, "Name is required").max(100, "Name must be 100 characters or less"),
      description: z
        .string()
        .min(1, "Description is required")
        .max(1000, "Description must be 1000 characters or less"),
    }),
  ),
});

const Classification = () => {
  //const { mutate: sendData, isPending } = useCreateEvalAPI();
  const form = useForm<z.infer<typeof GenerateDataFormSchema>>({
    resolver: zodResolver(GenerateDataFormSchema),
    defaultValues: {
      categories: [{ name: "", description: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "categories",
    control: form.control,
  });

  const [duplicateError, setDuplicateError] = useState<string | null>(null);

  useEffect(() => {
    const subscription = form.watch(value => {
      const values = value.categories?.map(item => item?.name) || [];
      const duplicates = values.filter((value, index) => values.indexOf(value) !== index);

      if (duplicates.length > 0) {
        setDuplicateError(`Duplicate category names found: ${duplicates.join(", ")}`);
      } else {
        setDuplicateError(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  function onSubmit(data: z.infer<typeof GenerateDataFormSchema>) {
    const values = data.categories.map(item => item.name);
    const duplicates = values.filter((value, index) => values.indexOf(value) !== index);

    if (duplicates.length > 0) {
      setDuplicateError(`Duplicate category names found: ${duplicates.join(", ")}`);
    } else {
      setDuplicateError(null);

      //const transformedData = transformData(data);
      //console.log("generate_data", transformedData);
      //sendData(transformedData);
    }
  }

  const handleAddCategory = () => {
    if (fields.length < 5) {
      append({ name: "", description: "" });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Classifier</CardTitle>
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
                      name={`categories.${index}.name`}
                      render={({ field }) => (
                        <FormItem className="col-span-2">
                          <FormControl>
                            <Input {...field} placeholder="Enter category name" />
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
                    name={`categories.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea {...field} placeholder="Enter category description" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              {fields.length < 5 && (
                <Button type="button" variant="outline" size="sm" className="mt-2" onClick={handleAddCategory}>
                  Add Category
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
