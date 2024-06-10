import { useQuery } from "@tanstack/react-query";
import { getSearchLetter } from "../../services/queries/searchLetter";
import { getLettersUser } from "../../services/queries/letters";
export function useSearchLetter(word) {
  const userId = localStorage.getItem("id");
  const letterId = word;
  console.log("word", word);

  const fetcher = async () => {
    if (word) {
      const result = await getSearchLetter(userId, word);
      return result ? result : [];
    } else {
      const result = await getLettersUser(userId);
      return result ? result : [];
    }
  };
  return useQuery({
    queryKey: word !== "" ? ["searchLetters", word] : ["receivedLetters"],
    queryFn: fetcher,
    enabled: false,
  });
}
