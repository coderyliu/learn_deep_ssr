import React, { memo } from "react";
import { useRouter } from "next/router";

// eslint-disable-next-line react/display-name
const DetailFirst = memo(() => {
  // 拿到动态路由的参数params 和 query ==> 都是通过useRouter的query
  // 如果params和query都有相同的字段，那么params会覆盖query 相当于Object.assign(query, params)
  const router = useRouter();
  const { id } = router.query;

  return <div> detail Page - {id} </div>;
});

export default DetailFirst;
