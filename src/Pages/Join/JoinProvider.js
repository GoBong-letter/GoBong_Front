import { createContext, useState } from "react";

export const JoinContext = createContext();
function JoinProvider({children}){
    const [ nickname , setNickname ] = useState('');
    const [ password , setPassword ] = useState('');
    const [ email , setEmail ] = useState('');
    const [ image , setImage ] = useState('');
    const [ userId, setUserId ] = useState();

    const GetUserInfo = ( nickname, image ) => {
        setNickname(nickname);
        setImage(image);
    }

    const UserInfo = (nickname, password, email) => {
        setNickname(nickname);
        setPassword(password);
        setEmail(email);
    };

    const UserProfile = (image) => {
        setImage(image);
    };

    return(
        <JoinContext.Provider value={{ userId, nickname, password, email, image, UserInfo, UserProfile, setUserId, GetUserInfo}}>
            {children}
        </JoinContext.Provider>
    )
}
export default JoinProvider;