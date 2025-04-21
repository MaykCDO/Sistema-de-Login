import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
