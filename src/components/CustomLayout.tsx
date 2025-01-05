import React from "react";

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <main className="custom-main">{children}</main>;
};

export default CustomLayout;
