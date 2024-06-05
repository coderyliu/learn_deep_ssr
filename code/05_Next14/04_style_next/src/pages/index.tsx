import React, { memo } from "react";
import Image from "next/image";

import FeelPng from "@/assets/images/feel.png";

// next中样式的书写方式有多种：
// 1. 内联样式
// 2. 外部样式表：支持css\sass
// 3. 通过webpack提供的.module.css\scss等后缀
// 4. css in js第三方库
// 5. tailwindcss

// 样式的编写位置：styles目录下、assets目录下等
// !全局样式，不能引入app目录下的global.css,全局样式只能在styles\assets目录下编写后，在_app.tsx中引用生效

// 使用sass需要安装对应的包

// 静态资源的引入：
// 1. public目录：直接使用/
// 2. assets目录：使用import

// eslint-disable-next-line react/display-name
const Index = memo(() => {
  return (
    <div>
      Index Page
      <h2 className="global-style">哈哈哈</h2>
      {/* public目录下的静态资源：直接使用'/' 不会被打包 */}
      <Image src={"/bym.png"} alt="public静态资源" width={200} height={200} />

      {/* assets目录下的静态资源：要使用import作为模块引入 */}
      <Image src={FeelPng} alt="assets静态资源" width={200} height={200} />

      {/* 字体图标的使用 */}
      <i className="iconfont icon-dayin"></i>
    </div>
  );
});

export default Index;
