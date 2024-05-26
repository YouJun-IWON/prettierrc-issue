"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import Loader from "../global/Loader";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { createClient } from "@/utils/supabase/client";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleLoginWithOAuth = (provider: "github" | "google") => {
    setIsLoading(true);
    const supabase = createClient();

    supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + "/auth/callback?next=/",
      },
    });

    setIsLoading(false);
  };

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button variant="outline" disabled={isLoading} onClick={() => handleLoginWithOAuth("google")}>
        {isLoading ? <Loader className="mr-2 h-4 w-4" /> : <FcGoogle className="mr-2 h-6 w-6" />} Google
      </Button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <Button variant="outline" disabled={isLoading} onClick={() => handleLoginWithOAuth("github")}>
        {isLoading ? <Loader className="mr-2 h-4 w-4" /> : <FaGithub className="mr-2 h-6 w-6" />} GitHub
      </Button>
    </div>
  );
}
