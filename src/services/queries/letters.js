// import { instnace } from "../../utils/axios";

import axios from "axios";

export async function getLettersUser() {
  let userId = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/letters/users/${userId}`
    );
    if (res.status === 200) {
      console.log(res.data);
      return res.data;
    }
  } catch (error) {
    console.error("전체 편지 불러오기 실패", error);
  }
}
