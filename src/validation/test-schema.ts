import { z } from "zod";

const TestDatasetItemSchema = z.object({
  id: z.number(),
  query: z.string(),
  context: z.string(),
  response: z.string(),
  expected: z.string(),
});

const TestDatasetSchema = z.array(TestDatasetItemSchema);

export type TestDatasetItemType = z.infer<typeof TestDatasetItemSchema>;
export type TestDatasetType = z.infer<typeof TestDatasetSchema>;

const TestApiDataItemSchema = z.object({
  name: z.string(),
  address: z.string(),
  desc: z.string(),
  detail_desc: z.string(),
  input: z.array(z.string()),
  output: z.array(z.string()),
  llm: z.string(),
});

export type TestAPIType = z.infer<typeof TestApiDataItemSchema>;

const TestAPIsSchema = z.array(TestApiDataItemSchema);

export type TestAPIsType = z.infer<typeof TestAPIsSchema>;

const TestApiConfigSchema = z.object({
  name: z.string(),
  failure_threshold: z.string(),
  keywords: z.array(z.string()),
});

const TestAPICongigsSchema = z.array(TestApiConfigSchema);

export type TestAPIConfigsType = z.infer<typeof TestAPICongigsSchema>;

export const dataSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type Task = z.infer<typeof dataSchema>;
