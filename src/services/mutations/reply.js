import { instnace } from "../../utils/axios";

/**
 * @param {string} letterId
 * @param {string} replyText
 */
export async function postLettersReply(letterId, replyText) {
  //TODO: USER API 연동되면 수정
  const userId = localStorage.getItem("id");

  return await instnace.post("/letters/reply", {
    user_id: userId,
    letter_id: letterId,
    content: replyText,
  });
}
