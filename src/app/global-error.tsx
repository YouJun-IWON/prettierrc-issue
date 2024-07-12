"use client";

import Image from "next/image";

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
      <body className="flex h-full flex-col items-center justify-center">
        <Image
          src="/page/server_down.svg"
          width={500}
          height={400}
          alt="server_down"
        />
        <h2 className="text-3xl">Something went wrong!</h2>
      </body>
    </html>
  );
}
