export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "Change Suggestion",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Detected Potential False Positive: “I see that this product might help with your issue.”. Blocked by “Avoid making promises”.",
    date: "2024-06-14T20:28:00",
    read: true,
    labels: ["activating...", "important"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Daily Report",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    text: "total 3023 conversations, 23 blocked, 97 alerts, 13 suspicious conversations detected.",
    date: "2024-06-10T10:30:00",
    read: true,
    labels: ["report", "important"],
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Change Made",
    email: "bobjohnson@example.com",
    subject: "Weekend Plans",
    text: "Change in topic “racism”. “Expressing frustration to someone with mentioning race without generalization” is no longer blocked. Blocked by “Expressing frustration to race”",
    date: "2024-06-01T11:45:00",
    read: true,
    labels: ["done", "personal"],
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Change Suggestion",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    text: "Detected Potential False Positive: “I bought my korean friend shirts from here last week but he didn’t like it. It was frustrating. I need a refund.” Blocked by ",
    date: "2024-05-25T13:15:00",
    read: false,
    labels: ["done"],
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Daily Report",
    email: "michaelwilson@example.com",
    subject: "Important Announcement",
    text: "Summary: total 2571 conversations, 12 blocked, 54 alerts, 15 suspicious conversations detected.",
    date: "2024-05-13T15:00:00",
    read: false,
    labels: ["report", "important"],
  },
  {
    id: "1f0f2c02-e299-40de-9b1d-86ef9e42126b",
    name: "Initial Setup",
    email: "sarahbrown@example.com",
    subject: "Re: Feedback on Proposal",
    text: "Moderation Alignment is now all set. 10 topics, 918 rules are now applied. You can download all rules here. Test is available here. If you want to see test logs done by ai and user, you can find here.",
    date: "2024-05-10T16:30:00",
    read: true,
    labels: ["done", "done"],
  },
];

export const mails1 = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "Greetings! 👋",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "Teach me your policy and I'll supervise your AI 🤖 for you.",
    date: "2024-06-14T18:06:00",
    read: true,
    labels: ["activating...", "important"],
  },
];

export type Mail = (typeof mails)[number];

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
];

export type Contact = (typeof contacts)[number];
