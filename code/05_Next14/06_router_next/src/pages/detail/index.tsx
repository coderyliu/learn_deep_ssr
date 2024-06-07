import React, { memo } from "react";

// eslint-disable-next-line react/display-name
const Detail = memo(() => {
  return (
    // 注意：动态路由的目录下还可以存放index.tsx 动态路由为空会走这个页面
    <div>Detail Page 主页</div>
  );
});

export default Detail;
