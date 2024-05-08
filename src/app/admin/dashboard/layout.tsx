"use client";
import { createSWRConfig } from "@utils/helpers";
import React, { ReactElement } from "react";
import { SWRConfig } from "swr";

function Layout({ children }: { children: ReactElement }) {
  return (
    <SWRConfig value={createSWRConfig()}>
      <div className="overflow-auto">{children}</div>
    </SWRConfig>
  );
}

export default Layout;
