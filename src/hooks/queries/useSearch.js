import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchLetter } from "../../services/queries/searchLetter";
import { getLettersUser } from "../../services/queries/letters";
export function useSearchLetter(keyword) {
  const fetcher = async () => {
    if (keyword) {
      const result = await getSearchLetter(keyword);
      return result ? result : [];
    } else {
      const result = await getLettersUser();
      return result ? result : [];
    }
  };
  return useQuery({
    queryKey: keyword !== "" ? ["searchLetters", keyword] : ["receivedLetters"],
    queryFn: fetcher,
    enabled: false,
  });
}
