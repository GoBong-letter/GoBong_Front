import { useEffect, useMemo } from "react";

import { useQuery } from "@tanstack/react-query";
import { getReceivedLetters } from "../../services/queries/receivedLetters";
import { getReceivedReplyLetters } from "../../services/queries/receivedReplyletters";
import { getSentLetters } from "../../services/queries/sentLetters";
import { getSentReplyLetters } from "../../services/queries/sentReplyLetters";
import { getLettersUser } from "../../services/queries/letters";

export function useFilteredLetter(tag) {
  console.log(tag);
  const { data: recieved } = useQuery({
    queryFn: getReceivedLetters,
    queryKey: getReceivedLetters.getKey(),
    enabled: tag === "recived",
  });
  const { data: recievedReply } = useQuery({
    queryFn: getReceivedReplyLetters,
    queryKey: getReceivedReplyLetters.getKey(),
    enabled: tag === "recived-reply",
  });
  const { data: sent } = useQuery({
    queryFn: getSentLetters,
    queryKey: getSentLetters.getKey(),
    enabled: tag === "sent",
  });
  const { data: sentReply } = useQuery({
    queryFn: getSentReplyLetters,
    queryKey: getSentReplyLetters.getKey(),
    enabled: tag === "sent-reply",
  });
  const { data: all } = useQuery({
    queryFn: getLettersUser,
    queryKey: getLettersUser.getKey(),
    enabled: tag === "all",
  });

  const letters = useMemo(() => {
    switch (tag) {
      case "all":
        return all;
      case "recived":
        return recieved;
      case "recived-reply":
        return recievedReply;
      case "sent":
        return sent;
      case "sent-reply":
        return sentReply;
      default:
        return [];
    }
  }, [recieved, recievedReply, sent, all, sentReply, tag]);

  return letters ?? [];
}
