import { defineStore } from "pinia";
import { getDetailData, type ProductDetailQueryType } from "@/services/detail";
import { type ProductDetailType } from "./home";

export type DetailInfoType = {
  id: number;
  title: string;
  productDetailss: ProductDetailType[];
};

export const useDetailStore = defineStore("detail", () => {
  const detailInfo = ref<DetailInfoType[]>([]);

  const fetchDetailInfo = async (type: ProductDetailQueryType) => {
    const { data } = await getDetailData<DetailInfoType[]>(type);
    detailInfo.value = data.value.data;
  };

  return { fetchDetailInfo, detailInfo };
});
