import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../../services/queries/category";

export function useCategory() {
  const userId = localStorage.getItem("id");
  return useQuery({
    queryKey: getCategory.getKey(userId),
    queryFn: getCategory,
  });
}
