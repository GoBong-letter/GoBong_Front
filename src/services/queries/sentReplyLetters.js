import { instnace } from "../../utils/axios";

const getKey = (userId) => ["letters/replies/sent/", 1];

export async function getSentReplyLetters() {
  const userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getSentReplyLetters, {
  getKey,
});
