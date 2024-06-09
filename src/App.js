import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./redux/store";
import SendLetterProvider from "./pages/WriteLetter/SendLetterProvider";

import Splash from "./pages/Splash";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import JoinProfile from "./pages/Join/JoinProfile";
import JoinAbout from "./pages/Join/JoinAbout";
import LoginPage from "./pages/Login/LoginPage";
import Home from "./pages/Home";
import Alarm from "./components/Home/Alarm";
import LetterDraw from "./pages/LetterDraw/LetterDraw";
import Draw from "./pages/LetterDraw/Draw";
import ReceiveLetter from "./pages/LetterDraw/ReceiveLetter";
import Community from "./pages/Community/Community";
import MyPage from "./pages/MyPage/Mypage";
import Guideline from "./pages/MyPage/Guideline";
import GuidelineTwo from "./pages/MyPage/GuidelineTwo";
import GuidelineThree from "./pages/MyPage/GuidelineThree";
import GuidelineLast from "./pages/MyPage/GuidelineLast";
import AlarmSetting from "./pages/MyPage/AlarmSetting";
import Setting from "./pages/MyPage/Setting";
import WriteLetterBasic from "./pages/WriteLetter/WriteLetterBasic";
import WriteLetter from "./pages/WriteLetter/WriteLetter";
import LetterStorage from "./pages/WriteLetter/LetterStorage";

function App() {
  const [client] = useState(new QueryClient());
  return (
    // <Provider store={store}>
    <QueryClientProvider client={client}>
      <SendLetterProvider>
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
            <Route path="/writeletterbasic" element={<WriteLetterBasic />} />
            <Route path="/writeletter" element={<WriteLetter />} />
            <Route path="/letterstorage" element={<LetterStorage />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </Router>
      </SendLetterProvider>
    </QueryClientProvider>
    // </Provider>
  );
}

export default App;
