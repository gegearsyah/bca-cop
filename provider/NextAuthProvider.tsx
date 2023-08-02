"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const NextAuthProvider = ({ children }: React.PropsWithChildren) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;
