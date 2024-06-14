import { instnace } from "../../utils/axios";

const getKey = (userId) => ["letters/replies/sent/", userId];

export async function getSentReplyLetters() {
  let userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  console.log("보낸답장", res.data);
  return res.data;
}
Object.assign(getSentReplyLetters, {
  getKey,
});
