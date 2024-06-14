import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/received/", userId];

export async function getReceivedLetters() {
  let userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getReceivedLetters, {
  getKey,
});
