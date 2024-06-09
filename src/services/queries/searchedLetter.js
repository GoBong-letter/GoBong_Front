import { instnace } from "../../utils/axios";

const getKey = (letterId) => ["letters/", letterId];

export async function getLettersUser(letterId) {
  const res = await instnace.get(getKey(letterId).join(""));
  return res.data;
}
Object.assign(getLettersUser, {
  getKey,
});
