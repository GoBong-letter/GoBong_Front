import { useEffect, useState } from "react";
import { getReceivedLetters } from "../../services/queries/receivedLetters";
import { getReceivedReplyLetters } from "../../services/queries/receivedReplyletters";
import { getSentLetters } from "../../services/queries/sentLetters";
import { getSentReplyLetters } from "../../services/queries/sentReplyLetters";
import { getLettersUser } from "../../services/queries/letters";

export function useFilteredLetter(tag, refresh) {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        switch (tag) {
          case "all":
            data = await getLettersUser();
            break;
          case "recived":
            data = await getReceivedLetters();
            break;
          case "recived-reply":
            data = await getReceivedReplyLetters();
            break;
          case "sent":
            data = await getSentLetters();
            break;
          case "send-reply":
            data = await getSentReplyLetters();
            break;
          default:
            data = [];
            break;
        }
        setLetters(data);
      } catch (error) {
        console.error("편지 불러오기 실패 ", error);
        setLetters([]);
      }
    };

    fetchData();
  }, [tag, refresh]);

  return { letters };
}
