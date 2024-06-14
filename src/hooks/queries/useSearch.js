import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchLetter } from "../../services/queries/searchLetter";
import { getLettersUser } from "../../services/queries/letters";
import { JoinContext } from "../../pages/Join/JoinProvider";
export function useSearchLetter(keyword) {
  const { userId } = useContext(JoinContext);
  // console.log("keyword", keyword);

  const fetcher = async () => {
    if (keyword) {
      const result = await getSearchLetter(userId, keyword);
      return result ? result : [];
    } else {
      const result = await getLettersUser(userId);
      return result ? result : [];
    }
  };
  return useQuery({
    queryKey: keyword !== "" ? ["searchLetters", keyword] : ["receivedLetters"],
    queryFn: fetcher,
    enabled: false,
  });
}
