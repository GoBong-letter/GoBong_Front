import { instnace } from "../../utils/axios";
/**
 * @param {object} req
 */
export async function postLetter(req) {
  return await instnace.post("/letters", req);
}
