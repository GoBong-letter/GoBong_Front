import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/sent/", userId];

export async function getSentLetters(userId) {
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getSentLetters, {
  getKey,
});
