import { instnace } from "../../utils/axios";

const getKey = (userId) => {
  return ["/letters/users/", userId];
};

export async function getLettersUser() {
  let userId = localStorage.getItem("id");

  console.log(getKey(userId).join(""));
  const res = await instnace.get(getKey(userId).join(""));
  // console.log(res.data);
  return res.data;
}
Object.assign(getLettersUser, {
  getKey,
});
