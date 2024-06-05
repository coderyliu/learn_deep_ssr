import React, { memo } from "react";
import MyButton from "@/components/my-button";

// eslint-disable-next-line react/display-name
const Index: React.FC = memo(() => {
  console.log(process.env)
  return (
    <div>
      Index page
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      <MyButton />
    </div>
  );
});

export default Index;
