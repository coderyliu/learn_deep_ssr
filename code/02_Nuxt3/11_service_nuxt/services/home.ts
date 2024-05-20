import lyFetch, { type IResultData } from "./index";

export const fetchHomeInfoData = () =>
  lyFetch.get<IResultData<any>>("/homeInfo");
