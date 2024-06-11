import { createContext, useState } from "react";

export const ReceiveLetterContext = createContext();

function ReceiveLetterProvider({ children }) {
    const [letterId, setLetterId] = useState(null);

    const saveLetterId = (letterId) => {
        setLetterId(letterId);
    }

    return (
        <ReceiveLetterContext.Provider value={{ letterId, saveLetterId }}>
            {children}
        </ReceiveLetterContext.Provider>
    )
}

export default ReceiveLetterProvider;