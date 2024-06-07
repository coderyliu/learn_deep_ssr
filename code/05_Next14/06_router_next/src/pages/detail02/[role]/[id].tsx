import React, { memo } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
const DetailThird = memo(() => {
  const { query } = useRouter();
  const { role, id } = query;

  return (
    <div>
      DetailThird - {role}- {id}
    </div>
  );
});

export default DetailThird;
