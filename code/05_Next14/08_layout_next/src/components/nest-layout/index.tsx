import React, { memo } from "react";
import Link from "next/link";

export interface IProps {
  children?: React.ReactElement;
}

// eslint-disable-next-line react/display-name
const NestLayout: React.FC<IProps> = memo((props) => {
  // ? 简单实现页面布局，next是通过props.children来实现的  在_app.tsx中使用layout.tsx即可
  // * 如果要实现双层布局嵌套呢,也是通过props.children来实现的
  const { children } = props;
  return (
    <div>
      <div>NestLayout</div>
      <div>
        <Link href="/profile">
          <button>profile</button>
        </Link>
        <Link href="/profile/login">
          <button>login</button>
        </Link>
      </div>
      {children}
    </div>
  );
});

export default NestLayout;
