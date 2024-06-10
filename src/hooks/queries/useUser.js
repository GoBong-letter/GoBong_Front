import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/queries/getuser";

export function useUser() {
  const userId = localStorage.getItem("id");
  return useQuery({
    queryKey: getUser.getKey(userId),
    queryFn: getUser,
  });
}
