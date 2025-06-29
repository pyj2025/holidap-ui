import { GuideItemType } from "@/type/guide";

export const CategoryData: string[] = ["캐나다", "한국", "항공"];

export const GuideData: GuideItemType[] = [
  {
    id: "canada_sim_card_application",
    title: "캐나다 유심 신청 및 현지 사용",
    category: "캐나다",
    tags: "모바일",
    filePath: "/content/canada_sim_card_application.md",
  },
  {
    id: "canada-immigration-packing-guide",
    title: "수화물 준비",
    category: "한국",
    tags: "항공",
    filePath: "/content/canada-immigration-packing-guide.md",
  },
];
