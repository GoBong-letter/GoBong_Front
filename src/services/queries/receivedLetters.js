import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/received/", userId];

export async function getReceivedLetters(userId) {
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getReceivedLetters, {
  getKey,
});
