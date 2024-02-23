import React from "react";
import Routes from "./src/routes/index";
import UserContextProvider from "./src/contexts/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
