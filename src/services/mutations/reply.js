import { instnace } from "../../utils/axios";

export async function postLettersReply(req) {
  // console.log(letterId type String, replyText typeof String)
  //TODO: USER API 연동되면 수정
  const userId = localStorage.getItem("id");
  // console.log(req);
  req = {
    ...req,
    user_id: userId,
  };
  return await instnace.post("/letters/reply", req);
}
