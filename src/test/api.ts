export const test_API_Data = [
  {
    name: "Conversation Coherence Evaluation",
    address: "/conversation-coherence-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["query", "response", "failure_threshold"],
    output: ["passed / failed", "grade_reason", "runtime", "model", "conversation_coherence"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Conversation Resolution Evaluation",
    address: "/conversation-resolution-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["query", "response", "failure_threshold"],
    output: ["passed / failed", "grade_reason", "runtime", "model", "conversation_resolution"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Summarization Evaluation",
    address: "/summarization-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["context", "response", "failure_threshold"],
    output: [
      "passed / failed",
      "grade_reason",
      "runtime",
      "model",
      "agreement_score",
      "contradiction_score",
      "hallucination_score",
    ],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Contains Keyword",
    address: "/contains-keyword",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["keywords", "response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Contains Link",
    address: "/contains-link",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["keywords", "response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Prompt Injection Evaluation",
    address: "/prompt-injection-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Pii Detection",
    address: "/pii-detection",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Content Moderation",
    address: "/openai-content-moderation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Gibberish Text Evaluation",
    address: "/gibberish-text-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Sensitive Topics Evaluation",
    address: "/sensitive-topics-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Safe For Work Text Evaluation",
    address: "/safe-for-work-text-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response"],
    output: ["passed / failed", "grade_reason", "runtime", "model"],
    llm: "gpt-3.5-turbo",
  },
  {
    name: "Similarity Evaluation",
    address: "/similarity-evaluation",
    desc: "Checks if the context contains enough information to answer the user's query",
    detail_desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc.",
    input: ["response", "expected", "failure_threshold"],
    output: ["passed / failed", "grade_reason", "runtime", "model", "similarity_score"],
    llm: "gpt-3.5-turbo",
  },
];
