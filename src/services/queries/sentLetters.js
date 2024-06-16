import axios from "axios";

export async function getSentLetters() {
  let userId = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/letters/sent/${userId}`
    );
    if (res.status === 200) {
      console.log("보낸 편지", res.data);
      return res.data;
    }
  } catch (error) {
    console.error("보낸 편지 불러오기 실패", error);
  }
}
