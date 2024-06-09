import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/replies/received/", 1];

export async function getReceivedReplyLetters() {
  const userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getReceivedReplyLetters, {
  getKey,
});
