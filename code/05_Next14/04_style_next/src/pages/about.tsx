import React, { memo } from "react";

import AbortStyle from "@/assets/css/about.module.scss";

// eslint-disable-next-line react/display-name
const About = memo(() => {
  return (
    <div className="global-style2">
      About Page
      <h2 className={AbortStyle.border}>嘿嘿嘿</h2>
      {/* tailwind.css */}
      <ul className="flex items-center justify-between">
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
});

export default About;
