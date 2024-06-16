import axios from "axios";

export async function getReceivedLetters() {
  let userId = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/letters/received/${userId}`
    );
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error("받은 편지 조회 실패", error);
  }
}
