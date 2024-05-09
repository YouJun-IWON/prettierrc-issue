export const test_API_Data = [
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
