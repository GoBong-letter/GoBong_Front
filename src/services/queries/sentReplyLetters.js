import axios from "axios";

export async function getSentReplyLetters() {
  let userId = localStorage.getItem("id");
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_HOST}/letters/replies/sent/${userId}`
    );
    if (res.status === 200) {
      console.log("보낸답장", res.data);
      return res.data;
    } else {
      console.log("djfla", res.status);
    }
  } catch (error) {
    console.error("보낸 답장 불러오기 실패", error);
  }
}
