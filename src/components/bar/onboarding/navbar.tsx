"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { NAVBAR_ITEMS } from "./components/constants";
import { buttonVariants } from "../../ui/button";
import useUser from "@/hooks/getProfileData/useUser";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import UserIcon from "./components/user";

const NavbarOnboarding = () => {
  const pathname = usePathname();

  const { isFetching, data } = useUser();

  return (
    <main className="sticky inset-x-0 top-0 z-50 w-full transition-all border-b border-gray-300">
      <section className="flex h-[47px] items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" target="_blank" className="flex flex-row space-x-3 items-center justify-center">
            <Image src="/assets/aim-dashboard-logo.svg" width={40} height={40} alt="plur logo" />
            <p className="font-bold">AIM Guard</p>
          </Link>
        </div>

        <div className="space-x-2 flex">
          {NAVBAR_ITEMS.map((item, idx) => {
            const isActive = pathname === item.path || (item.path !== "/onboarding" && pathname.startsWith(item.path));

            return (
              <Link
                href={item.path}
                className={cn(buttonVariants({ variant: "navbar", size: "sm" }), "space-x-2", {
                  "bg-blue-300 border-cyan-400": isActive,
                })}
                key={idx}
              >
                {item.icon}
                <p className="text-sm font-light">{item.title}</p>
              </Link>
            );
          })}
        </div>

        <div className="space-x-2 flex">
          <Link
            href="mailto:team@aim-intelligence.com"
            className="px-5 py-2  flex items-center justify-center text-center hover:opacity-85 font-semibold text-sm hover:underline"
          >
            Need Help?
          </Link>

          {isFetching ? (
            <></>
          ) : data?.id ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex  rounded-full bg-orange-400 items-center justify-center text-center hover:opacity-85 hover:cursor-pointer">
                  <Image
                    src={data.image_url ? data.image_url : "/assets/profile.svg"}
                    width={40}
                    height={40}
                    alt="profile image"
                    className="rounded-full border border-1 border-amber-600"
                  />

                  <p className="px-4">{data.display_name}</p>
                </div>
              </DropdownMenuTrigger>
              <UserIcon />
            </DropdownMenu>
          ) : (
            <Link
              href="/auth"
              className=" px-5 py-2 rounded-full bg-zinc-600 flex items-center justify-center text-center hover:opacity-85"
            >
              <span className="font-semibold text-sm text-white">Login </span>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
};

export default NavbarOnboarding;
