import { useQuery } from "@tanstack/react-query";
import { getLettersUser } from "../../services/queries/letters";
import { useContext } from "react";
export function useLetterUser() {
  const userId = localStorage;
  return useQuery({
    queryKey: getLettersUser.getKey(userId),
    queryFn: getLettersUser,
  });
}
