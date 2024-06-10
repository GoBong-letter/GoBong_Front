import { instnace } from "../../utils/axios";

const getKey = (userId) => ["letters/replies/sent/", userId];

export async function getSentReplyLetters(userId) {
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getSentReplyLetters, {
  getKey,
});
