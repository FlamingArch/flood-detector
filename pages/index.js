import MainPage from "../components/main";
import { AppProvider } from "../components/context";
import { FirebaseProvider } from "../components/fireabase";

export default function Home() {
  return (
    // <h2>sup</h2>
    <AppProvider>
      <FirebaseProvider>
        <MainPage />
      </FirebaseProvider>
    </AppProvider>
  );
}
