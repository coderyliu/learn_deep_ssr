import React, { memo, useEffect } from "react";

// eslint-disable-next-line react/display-name
const Index = memo(() => {
  // *函数式组件中，客户端和以前执行生命周期的规则一样
  // *服务端执行执行函数式组件的这个函数体中的内容，不会执行函数体最最里面的内容

  console.log(1)
  useEffect(() => {
    console.log("函数式组件执行Effect");

    return (() => {
      console.log("函数式组件执行Cleanup");
    })
  })

  return <div>Index</div>;
});

export default Index;
