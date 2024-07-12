import React from "react";

import dynamic from "next/dynamic";

import { type Mail } from "./data";

import { Separator } from "@/components/ui/separator";
import ChatMessages from "@/demo/components/ChatMessages";

interface MailDisplayProps {
  mail: Mail | null;
}

const MailChat = ({ mail }: MailDisplayProps) => {
  if (!mail) return;

  const ChatInput = dynamic(() => import("@/demo/components/ChatInput"), {
    ssr: false,
  });

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <Separator />

      <div className="whitespace-pre-wrap p-4 text-sm">
        <div className="flex flex-col h-[800px]">
          <ChatMessages className="px-2 py-3 flex-1" />

          <Separator className="mt-auto" />
          <div className="p-4">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailChat;
