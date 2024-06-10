import { useQuery } from "@tanstack/react-query";
import { getLettersUser } from "../../services/queries/letters";
import { useContext } from "react";
import { JoinContext } from "../../Pages/Join/JoinProvider";
export function useLetterUser() {
  const { userId } = useContext(JoinContext);
  return useQuery({
    queryKey: getLettersUser.getKey(userId),
    queryFn: getLettersUser,
  });
}
