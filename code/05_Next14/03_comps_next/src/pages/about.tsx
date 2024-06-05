import React, { memo } from "react";
import Image from "next/image";

import UserPng from "@/assets/images/user.png";

// eslint-disable-next-line react/display-name
const About = memo(() => {
  // 使用Image内置组件
  return (
    <div>
      About page
      <h2>哈哈哈</h2>
      {/* 必传属性：src、width、height、alt */}
      {/* 1. 加载本地图片 */}
      <Image src={UserPng} width={500} height={500} alt="黑黑恶" />

      {/* 2. 加载远程图片，必须在next.config中配置白名单 */}
      <Image
        src={
          "https://p2.music.126.net/mqTKX_-Llqif4oFJkfWpRw==/109951164206445553.jpg?param=140y140"
        }
        width={140}
        height={140}
        alt="User"
        priority
      />
    </div>
  );
});

export default About;
