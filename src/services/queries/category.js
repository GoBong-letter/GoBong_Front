import { instnace } from "../../utils/axios";

const getKey = (letterId) => ["/letters/category/", letterId];

export async function getCategory(letterId) {
  const res = await instnace.get(getKey(letterId).join(""));
  return res.data;
}
Object.assign(getCategory, {
  getKey,
});
