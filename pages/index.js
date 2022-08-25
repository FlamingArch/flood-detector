import MainPage from "./main";
import { AppProvider } from "./context";

export default function Home() {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
}
