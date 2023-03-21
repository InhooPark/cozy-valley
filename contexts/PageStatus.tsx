import React, { createContext, useState } from "react";
export const PageContext = createContext(null);

const PageStatus = ({ children }: { children: React.ReactNode }) => {
  const [signNav, setSignNav] = useState<string>("in");

  const value = { signNav, setSignNav };

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageStatus;
