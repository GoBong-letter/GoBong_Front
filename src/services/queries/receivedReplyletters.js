import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/replies/received/", userId];

export async function getReceivedReplyLetters(userId) {
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getReceivedReplyLetters, {
  getKey,
});
