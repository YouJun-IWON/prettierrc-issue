"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <html>
      <body className="flex flex-col items-center justify-center h-full">
        <Image
          src="/page/server_down.svg"
          width={500}
          height={400}
          alt="server_down"
        />
        <h2 className="text-3xl">Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
}
