import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <Image src="/page/under_construction.svg" width={500} height={400} alt="under_construction" />
      <h2 className="text-3xl">Under Construction</h2>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
