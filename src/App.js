import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./redux/store";
import SendLetterProvider from "./Pages/WriteLetter/SendLetterProvider";

import Splash from "./Pages/Splash"
import Login from "./Pages/Login/Login";
import Join from "./Pages/Join/Join";
import JoinProfile from "./Pages/Join/JoinProfile";
import JoinAbout from "./Pages/Join/JoinAbout";
import LoginPage from "./Pages/Login/LoginPage";
import Home from "./Pages/Home";
import Alarm from "./components/Home/Alarm";
import LetterDraw from "./Pages/LetterDraw/LetterDraw";
import Draw from "./Pages/LetterDraw/Draw";
import ReceiveLetter from "./Pages/LetterDraw/ReceiveLetter";
import Community from "./Pages/Community/Community";
import MyPage from "./Pages/MyPage/Mypage";
import Guideline from "./Pages/MyPage/Guideline";
import GuidelineTwo from "./Pages/MyPage/GuidelineTwo";
import GuidelineThree from "./Pages/MyPage/GuidelineThree";
import GuidelineLast from "./Pages/MyPage/GuidelineLast";
import AlarmSetting from "./Pages/MyPage/AlarmSetting";
import Setting from "./Pages/MyPage/Setting";
import WriteLetterBasic from "./Pages/WriteLetter/WriteLetterBasic";
import WriteLetter from "./Pages/WriteLetter/WriteLetter";
import LetterStorage from "./Pages/WriteLetter/LetterStorage";
import JoinProvider from "./Pages/Join/JoinProvider";
import ReceiveLetterProvider from "./Pages/LetterDraw/ReceiveLetterProvider";

function App() {
  const [client] = useState(new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <SendLetterProvider>
          <JoinProvider>
            <ReceiveLetterProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Splash />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="/joinProfile" element={<JoinProfile />} />
                  <Route path="/joinAbout" element={<JoinAbout />} />
                  <Route path="/loginPage" element={<LoginPage />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/alram" element={<Alarm />} />
                  <Route path="/letterDraw" element={<LetterDraw />} />
                  <Route path="/draw" element={<Draw />} />
                  <Route path="/receiveLetter" element={<ReceiveLetter />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/guideline" element={<Guideline />} />
                  <Route path="/guidelineTwo" element={<GuidelineTwo />} />
                  <Route path="/guidelineThree" element={<GuidelineThree />} />
                  <Route path="/guidelineLast" element={<GuidelineLast />} />
                  <Route path="/alarmSetting" element={<AlarmSetting />} />
                  <Route
                    path="/writeletterbasic"
                    element={<WriteLetterBasic />}
                  />
                  <Route path="/writeletter" element={<WriteLetter />} />
                  <Route path="/letterstorage" element={<LetterStorage />} />
                  <Route path="/setting" element={<Setting />} />
                </Routes>
              </Router>
            </ReceiveLetterProvider>
          </JoinProvider>
        </SendLetterProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
