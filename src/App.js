import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "./redux/store";
import SendLetterProvider from "./pages/writeletter/SendLetterProvider";

// import Splash from "./pages/Splash";
import Login from "./pages/login/Login";
import Join from "./pages/join/Join";
import JoinProfile from "./pages/join/JoinProfile";
import JoinAbout from "./pages/join/JoinAbout";
import LoginPage from "./pages/login/LoginPage";
import Home from "./pages/Home";
import Alarm from "./components/home/Alarm";
import LetterDraw from "./pages/letterdraw/LetterDraw";
import Draw from "./pages/letterdraw/Draw";
import ReceiveLetter from "./pages/letterdraw/ReceiveLetter";
import Community from "./pages/community/Community";
import MyPage from "./pages/mypage/Mypage";
import Guideline from "./pages/mypage/Guideline";
import GuidelineTwo from "./pages/mypage/GuidelineTwo";
import GuidelineThree from "./pages/mypage/GuidelineThree";
import GuidelineLast from "./pages/mypage/GuidelineLast";
import AlarmSetting from "./pages/mypage/AlarmSetting";
import Setting from "./pages/mypage/Setting";
import WriteLetterBasic from "./pages/writeletter/WriteLetterBasic";
import WriteLetter from "./pages/writeletter/WriteLetter";
import LetterStorage from "./pages/writeletter/LetterStorage";
import JoinProvider from "./pages/join/JoinProvider";
import ReceiveLetterProvider from "./pages/letterdraw/ReceiveLetterProvider";

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
                  {/* <Route path="/" element={<Splash />} /> */}
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
                    path="/writeLetterbasic"
                    element={<WriteLetterBasic />}
                  />
                  <Route path="/writeLetter" element={<WriteLetter />} />
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
