import { defineStore } from "pinia";
import { getHomeData, type HomeInfoType } from "@/services/home";

export type NavBarItemType = {
  id: number;
  title: string;
  type: HomeInfoType;
  link: string;
};

export type BannerItemType = {
  id: number;
  picStr: string;
  link: string;
};

type ProductActivityType = {
  type: number
  activityInfo: string
}

type ProductPriceInfoType = {
  price: string
  buyPrice: string
  prefix?: string
  currencyTag: string
}

export type ProductDetailType = {
  id: number
  title: string
  secondTitle: string
  url: string
  type: HomeInfoType
  link: string
  activityList: ProductActivityType[]
  priceInfo: ProductPriceInfoType
}

export type CategoryItemType = {
  id: number;
  picStr: string;
  title: string;
  type: HomeInfoType;
  url: string;
  productDetailss: ProductDetailType[];
};

type HomeState = {
  navbars: NavBarItemType[];
  banners: BannerItemType[];
  categorys: CategoryItemType[];
};

export const useHomeStore = defineStore("home", () => {
  const navbarList: Ref<NavBarItemType[]> = ref([]);
  const bannerList: Ref<BannerItemType[]> = ref([]);
  const categoryList: Ref<CategoryItemType[]> = ref([]);

  const fetchHomeData = async (type?: HomeInfoType) => {
    const { data } = await getHomeData<HomeState>(type);
    const { navbars, banners, categorys } = data.value.data || {};
    navbarList.value = navbars || [];
    bannerList.value = banners || [];
    categoryList.value = categorys || [];
  };

  return { navbarList, bannerList, categoryList, fetchHomeData };
});
