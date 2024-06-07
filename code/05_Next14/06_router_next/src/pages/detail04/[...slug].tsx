import { useRouter } from "next/router";
import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const DetailFour = memo(() => {
  const { query } = useRouter();
  const { slug } = query;

  return <div>DetailFour Page {slug}</div>;
});

export default DetailFour;
