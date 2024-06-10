import { instnace } from "../../utils/axios";

const getKey = (userId) => ["/letters/users/", userId];

export async function getLettersUser(userId) {
  const res = await instnace.get(getKey(userId).join(""));
  return res.data;
}
Object.assign(getLettersUser, {
  getKey,
});
