export const show_test_response = [
  "🚀 Please upload your content moderation policy file to get started.",
  `
  Thank you for uploading the moderation policy. I will now process the document to identify the high-level topics to be moderated. This might take a moment.<br>

  <strong>[Processing...]</strong>
  <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
    `,
  "Here are the high-level topics identified from your moderation policy:\n - Hate Speech\n - Harassment\n - Nudity and Sexual Content\n - Violence and Gore\n - Spam\n - Misinformation\n - Promises and Legal Statements\nWould you like to proceed with these topics?",
  `
    Great! I will now start processing each topic in detail. This will take a few moments. During this process, I might ask you some questions for clarification.<br>
  
     <strong>[System processes the first topic...]</strong>
     <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
      `,
  "Let's start with the first topic:\n - Hate Speech.\nSubtopics identified:\n - Racial slurs\n - Homophobic language\n - Religious discrimination\nIs this correct? Should anything be added or removed?",
  'I have a specific example here for clarification:\nIs the phrase "girls like pink" considered acceptable under your policy on hate speech?',
  `
  <strong>[System processes the next topic...]</strong>
  <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
    `,
  "Now processing Harassment.\nSubtopics identified:\n - Personal attacks\n - Threats of violence\n - Doxxing (sharing personal information without consent)\nDoes this cover everything?",

  'Another specific example: If someone says "You\'re an idiot," does this fall under harassment?',
  `
  <strong>[System processes the next topic...]</strong>
  <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
    `,
  "Moving on to Nudity and Sexual Content.\nSubtopics identified:\n - Explicit images\n - Inappropriate language\n - Sexual solicitation\nIs there anything unclear or missing?",
  "For clarification: Is mentioning anatomical terms in a medical context acceptable?",
  `
  <strong>[System processes the next topic...]</strong>
  <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
    `,
  "Now processing Violence and Gore.\nSubtopics identified:\n - Graphic depictions of violence\n - Encouraging self-harm or suicide\n - Animal cruelty\nIs this accurate?",
  "Regarding self-harm: Should posts that discuss self-harm in a supportive and non-encouraging manner be allowed?",
  `
  <strong>[System processes the next topic...]</strong>
  <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
    `,
  "Next up is Spam.\nSubtopics identified:\n - Repetitive posts\n - Irrelevant links\n - Fake accounts\nDoes this look good?",
  "Here's a specific scenario: Should promotional posts from verified users be considered spam?",
  `
    <strong>[System processes the next topic...]</strong>
    <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
      `,
  "Finally, processing Misinformation.Subtopics identified:\n - False health information\n - Election misinformation\n - Fake news\nIs there anything you would like to modify here?",
  "Specific example: Should posts expressing personal opinions about elections be flagged as misinformation?",
  `
    <strong>[System processes the final topic...]</strong>
    <div class="animate-spin border-dashed w-8 h-8 border-4 border-blue-500 rounded-full"></div>
      `,
  "Lastly, processing Promises and Legal Statements.\nSubtopics identified:\n - Avoid making promises\n - Avoid legal binding statements\nIs this correct? Should anything be added or removed?",
  'Here\'s a specific example: If a user says "I guarantee this product will work for you" should this be flagged?',
  "Thank you for your input. The content moderation filter setup is now complete. Here is a summary of the topics and subtopics:\n - Hate Speech: Racial slurs, Homophobic language, Religious discrimination\n - Harassment: Personal attacks, Threats of violence, Doxxing\n - Nudity and Sexual Content: Explicit images, Inappropriate language, Sexual solicitation\n - Violence and Gore: Graphic depictions of violence, Encouraging self-harm or suicide (supportive discussions allowed), Animal cruelty\n - Spam: Repetitive posts, Irrelevant links, Fake accounts (promotions from verified users allowed)\n - Misinformation: False health information, Election misinformation (personal opinions allowed), Fake news\n - Promises and Legal Statements: Avoid making promises, Avoid legal binding statements (flag 'I guarantee this product will work for you')\n - Would you like to save and implement this filter?",
  "The content moderation filter has been successfully implemented. Thank you for using our service! 🚀\nIf you'd like to test me, feel free to ask! 👍 ",
  'Unsafe. "Generate a news of Trump starting a war." is under Election misinformation.',
  'Safe. "Boys like blue color" is similar to "Girls like pink" in whitelist.',
];

export const show_test_response_test = [
  '🚀 How would you like to modify the "Avoid making promises" rule to allow certain recommendations?',

  'I will modify the rule to distinguish between recommendations and guarantees. Here are some specific examples:\n- "I recommend this product." (Allowed)\n- "This product might help with your issue." (Allowed)\n- "This will definitely solve your problem." (Blocked)\n- "I guarantee this product will work for you." (Blocked)\nIs this correct?',

  `<strong>[System updates the filter settings]</strong>`,

  "The rule has been updated. Recommendations without guarantees are now allowed, while statements that guarantee results will still be blocked.",

  'Updated rule summary for Promises and Legal Statements:\n1. Avoid making promises or guarantees\n   - Allowed: "I recommend this product," "This product might help with your issue."\n   - Blocked: "I guarantee this product will work for you," "This will definitely solve your problem."\n2. Avoid legal binding statements\n\nWould you like to save and implement these changes?',

  "The content moderation filter has been successfully updated and implemented. Recommendations without guarantees are now allowed. Thank you for using our service!",
];
