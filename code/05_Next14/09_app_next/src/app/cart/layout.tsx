import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const CartLayout = memo(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
      <div>
        <h2>CartLayout</h2>
        <div>{children}</div>
      </div>
    );
  }
);

export default CartLayout;
