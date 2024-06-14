import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const ProfileLayout = memo(
  ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
      <div>
        <h2>ProfileLayout</h2>
        <div>{children}</div>
      </div>
    );
  }
);

export default ProfileLayout;
