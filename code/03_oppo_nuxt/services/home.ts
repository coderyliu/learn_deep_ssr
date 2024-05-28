import lyRequest, { type ResultData } from "./index";

export type HomeInfoType = "oppo" | "onePlus" | "intelligent";

export const getHomeData = <T>(type: HomeInfoType = "oppo") => {
  return lyRequest.get<ResultData<T>>("/home/info", { type });
};
