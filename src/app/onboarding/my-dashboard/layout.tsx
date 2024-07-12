"use client";

import { FC, ReactNode } from "react";

import { MessagesProvider } from "@/demo/context/messages";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <MessagesProvider>{children}</MessagesProvider>;
};

export default Layout;
