import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/replies/received/", userId];

export async function getReceivedReplyLetters() {
  let userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  console.log("받은 답장", res.data);
  return res.data;
}
Object.assign(getReceivedReplyLetters, {
  getKey,
});
