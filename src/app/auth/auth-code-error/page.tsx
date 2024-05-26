"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Image src="/page/server_down.svg" width={500} height={400} alt="server_down" />
      <h2 className="text-3xl">Something went wrong!</h2>
      <Button asChild>
        <Button onClick={() => router.refresh()}>Try again</Button>
      </Button>
    </div>
  );
}
