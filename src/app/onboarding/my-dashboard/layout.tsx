"use client";

import { MessagesProvider } from "@/demo/context/messages";

import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <MessagesProvider>{children}</MessagesProvider>;
};

export default Layout;
