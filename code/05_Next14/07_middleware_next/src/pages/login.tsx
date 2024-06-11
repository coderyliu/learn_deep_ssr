import React, { memo, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/display-name
const Login = memo(() => {
  useEffect(() => {
    // 只有对node server发起请求，才会被拦截
    axios.get("http://localhost:3000/juanpi/api/homeInfo").then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Login</div>;
});

export default Login;
