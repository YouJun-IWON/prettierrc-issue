export const test_API_Data = [
  {
    name: "Conversation Coherence Evaluation",
    address: "/conversation-coherence-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["query", "response"],
    llm: "gpt-4-turbo",
    failure_threshold: true,
    keywords: false,
  },
  {
    name: "Conversation Resolution Evaluation",
    address: "/conversation-resolution-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["query", "response"],
    llm: "gpt-3.5-turbo",
    failure_threshold: true,
    keywords: false,
  },
  {
    name: "Summarization Evaluation",
    address: "/summarization-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["context", "response"],
    llm: "gpt-3.5-turbo",
    failure_threshold: true,
    keywords: false,
  },
  {
    name: "Contains Keyword",
    address: "/contains-keyword",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["keywords", "response"],
    llm: "gpt-4-turbo",
    failure_threshold: false,
    keywords: true,
  },
  {
    name: "Contains Link",
    address: "/contains-link",
    desc: "Checks if the context contains enough information to answer the user's query",
    input: ["keywords", "response"],
    llm: "gpt-4-turbo",
    failure_threshold: false,
    keywords: true,
  },
  // {
  //   name: "Prompt Injection Evaluation",
  //   address: "/prompt-injection-evaluation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Pii Detection",
  //   address: "/pii-detection",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Openai Content Moderation",
  //   address: "/openai-content-moderation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Gibberish Text Evaluation",
  //   address: "/gibberish-text-evaluation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Sensitive Topics Evaluation",
  //   address: "/sensitive-topics-evaluation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Safe For Work Text Evaluation",
  //   address: "/safe-for-work-text-evaluation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["response"],
  //   llm: "gpt-4-turbo",
  // },
  // {
  //   name: "Similarity Evaluation",
  //   address: "/similarity-evaluation",
  //   desc: "Checks if the context contains enough information to answer the user's query",
  //   input: ["context", "response"],
  //   llm: "gpt-4-turbo",
  // },
];
