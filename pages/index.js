import MainPage from "./main";
import { AppContext, AppProvider } from "./context";
import { useContext, useEffect } from "react";

export default function Home() {
  return (
    // <h1>{val}</h1>
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}
