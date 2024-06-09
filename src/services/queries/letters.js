import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/users/", 1];

export async function getLettersUser() {
  const userId = localStorage.getItem("id");
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getLettersUser, {
  getKey,
});
