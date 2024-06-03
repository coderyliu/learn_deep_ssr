import React, { memo } from "react";
import MyButton from "@/components/my-button";

// eslint-disable-next-line react/display-name
const Index: React.FC = memo(() => {
  return (
    <div>
      Index page
      <MyButton />
    </div>
  );
});

export default Index;
