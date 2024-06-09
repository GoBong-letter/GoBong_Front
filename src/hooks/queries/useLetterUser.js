import { useQuery } from "@tanstack/react-query";
import { getLettersUser } from "../../services/queries/letters";

export function useLetterUser() {
  const userId = localStorage.getItem("id");
  return useQuery({
    queryKey: getLettersUser.getKey(userId),
    queryFn: getLettersUser,
  });
}
