import Link from "next/link";
import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const Index = memo(() => {
  return (
    <div>
      Index
      <Link href="/cart">cart</Link>
      <Link href="/">page</Link>
      <Link href="/profile/login">profile</Link>
    </div>
  );
});

export default Index;
