import axios from "axios";
export async function getReceivedReplyLetters() {
  let userId = localStorage.getItem("id");

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/letters/replies/received/${userId}`
    );
    if (res.status === 200) {
      console.log("받은 답장", res.data);
      return res.data;
    } else {
    }
  } catch (error) {
    console.error("받은 답장 불러오기 실패", error);
  }
}
