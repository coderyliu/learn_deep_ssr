import React, { memo, useEffect } from "react";
import lyFetch from "@/services";

type IResultData<T> = {
  code: number;
  data: T;
};

// eslint-disable-next-line react/display-name
const Index = memo(() => {
  useEffect(() => {
    lyFetch.get<IResultData<any>>("/homeInfo").then((res) => {
      console.log(res);
    });
  }, []);

  return <div>Index</div>;
});

export default Index;
