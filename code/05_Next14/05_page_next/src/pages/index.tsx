import React, { memo } from "react";

// !当我们在pages目录中新建index页面时，layout的组件就会默认没有用了，包括在里面引入的全局样式文件
// !如果要启用，我们需要新建_app.tsx来覆盖默认配置

// eslint-disable-next-line react/display-name
const Index: React.FC = memo(() => {
  return (
    <div>
      <h2>哈哈哈</h2>
      <ul className="flex justify-between items-center">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
});

export default Index;
