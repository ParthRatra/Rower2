import React from "react";
import GlobalStyle from "../GlobalStyle";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import Home from "../Home";
import PublishRide from "./PublishRide";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLogo from "./mainLogo";
import CustomerCard from "./customerCard";
import PhoneSignUp from "./authotication/components/PhoneSignUp";
import Signup from "./authotication/components/Signup";
import Home2 from "./authotication/components/Home2";
import ProtectedRoute from "./authotication/components/ProtectedRoute";
import { UserAuthContextProvider } from "./authotication/context/UserAuthContext";
import Login from "./authotication/components/Login";
const SplitBackground = () => {
  return (
    <>
      <UserAuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <div className="parent">
            <div className="child-1">
              <MainLogo />
            </div>

            <div className="child-2">
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route  path='/customerCard' element={<CustomerCard Start="Jaipur" destination="Fridabad" start-time="4:00pm" />} />
                  <Route  path='/PublishRide' element={<PublishRide />} />
                  <Route path="/phonesignup" exact element={<PhoneSignUp />} />
                  <Route path="/Login" exact element={<Login />} />
                  <Route path="/signup" exact element={<Signup />} />
                  <Route path="/home"
                    element={
                      <ProtectedRoute>
                        <Home2/>
                      </ProtectedRoute>
                    }
                  />
                </Routes>

              </BrowserRouter>

            </div>
          </div>
        </ThemeProvider>
      </UserAuthContextProvider>
    </>
  )
}
const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgb(24 24 29)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  //media queries krdi set
  media: { mobile: "100px", tab: "998px" },

};
export default SplitBackground;