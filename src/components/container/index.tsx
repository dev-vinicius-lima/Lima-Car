import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-7xl max-auto px-4">{children}</div>;
};

export default Container;
