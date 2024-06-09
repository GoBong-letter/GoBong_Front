import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/received/", 1];

export async function getReceivedLetters() {
  const userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getReceivedLetters, {
  getKey,
});
