import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/sent/", 1];

export async function getSentLetters() {
  const userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getSentLetters, {
  getKey,
});
