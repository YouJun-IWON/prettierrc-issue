"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import React from "react";

import { useModal } from "@/store/useModalStore";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import useGenerateServer from "@/hooks/generateTestData/useGenerateAPI";
import { useGenerateData } from "@/store/useGenerateDataStore";
import Loader from "@/components/global/Loader";

const GenerateDataFormSchema = z.object({
  count: z.coerce
    .number()
    .min(1, { message: "Count must be at least 1." })
    .max(30, { message: "Count must not exceed 30." }),
  userdesc: z
    .string()
    .min(2, {
      message: "User description must be at least 2 characters.",
    })
    .max(300, {
      message: "User description must not be longer than 300 characters.",
    }),
  urls: z
    .array(
      z.object({
        value: z.string(),
      }),
    )
    .optional(),
});

const GenerateData = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "generateData";
  const { setType } = useGenerateData();
  const { mutate: sendData, isPending } = useGenerateServer();

  const form = useForm<z.infer<typeof GenerateDataFormSchema>>({
    resolver: zodResolver(GenerateDataFormSchema),
    defaultValues: {
      count: 1,
      userdesc: "",
      urls: [{ value: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  function transformData(originalData: any) {
    return {
      n: originalData.count,
      user_description: originalData.userdesc,
      data_source_urls: originalData.urls.map((urlObj: any) => urlObj.value),
    };
  }

  function onSubmit(data: z.infer<typeof GenerateDataFormSchema>) {
    const transformedData = transformData(data);

    sendData(transformedData);
  }

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[455px]">
          <DialogHeader>
            <DialogTitle>Make Test Data</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center">
            <Tabs
              defaultValue="/generate-synthetic-dataset"
              className="w-[400px]"
              onValueChange={value => setType(value)}
            >
              <TabsList className="grid w-full grid-cols-2 bg-slate-300">
                <TabsTrigger value="/generate-synthetic-dataset">Synthetic Data</TabsTrigger>
                <TabsTrigger value="/generate-unsafe-synthetic-dataset">Unsafe Synthetic Data</TabsTrigger>
              </TabsList>
              <TabsContent value="/generate-synthetic-dataset">
                <Card>
                  <CardHeader>
                    <CardTitle>Synthetic Data</CardTitle>
                    <CardDescription>
                      Please fill out the information below. The more detailed, the better performance.{" "}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="count"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Count</FormLabel>
                              <FormControl>
                                <Input {...field} type="number" min={0} max={30} step={1} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="userdesc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>User Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div>
                          {fields.map((field, index) => (
                            <div key={field.id} className=" space-x-2">
                              <FormField
                                control={form.control}
                                name={`urls.${index}.value`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={cn(index !== 0 && "sr-only")}>URLs</FormLabel>
                                    <div className="grid grid-cols-3 gap-2 items-center">
                                      <FormControl className="col-span-2">
                                        <Input {...field} />
                                      </FormControl>

                                      <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => remove(index)}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => append({ value: "" })}
                          >
                            Add URL
                          </Button>
                        </div>

                        <Button className="w-full" type="submit">
                          {isPending ? (
                            <div className="flex items-center gap-2">
                              <Loader /> Generating...
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="/generate-unsafe-synthetic-dataset">
                <Card>
                  <CardHeader>
                    <CardTitle>unSafeSynthetic</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you&apos;ll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="count"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Count</FormLabel>
                              <FormControl>
                                <Input {...field} type="number" min={0} max={30} step={1} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="userdesc"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>User Description</FormLabel>
                              <FormControl>
                                <Textarea placeholder="" {...field} />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div>
                          {fields.map((field, index) => (
                            <div key={field.id} className=" space-x-2">
                              <FormField
                                control={form.control}
                                name={`urls.${index}.value`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className={cn(index !== 0 && "sr-only")}>URLs</FormLabel>
                                    <div className="grid grid-cols-3 gap-2 items-center">
                                      <FormControl className="col-span-2">
                                        <Input {...field} />
                                      </FormControl>

                                      <Button
                                        type="button"
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => remove(index)}
                                      >
                                        Remove
                                      </Button>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          ))}
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            onClick={() => append({ value: "" })}
                          >
                            Add URL
                          </Button>
                        </div>

                        <Button className="w-full" type="submit">
                          {isPending ? (
                            <div className="flex items-center gap-2">
                              <Loader /> Generating...
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GenerateData;
