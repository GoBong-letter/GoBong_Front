import { instnace } from "../../utils/axios";

const getKey = (userId, words) => [`/letters/search/${userId}/${words}`];

export async function getSearchLetter(words) {
  const userId = localStorage.getItem("id");
  // console.log(getKey(userId, words));
  const res = await instnace.get(getKey(userId, words).join(""));
  // console.log(res.data);
  return res.data;
}
Object.assign(getSearchLetter, {
  getKey,
});
