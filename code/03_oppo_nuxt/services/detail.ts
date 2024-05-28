import lyRequest, { type ResultData } from "@/services";
export type ProductDetailQueryType = "oppo" | "air" | "watch" | "tablet";

export const getDetailData = <T>(type: ProductDetailQueryType) => {
  return lyRequest.get<ResultData<T>>("/oppoDetail", { type });
};
