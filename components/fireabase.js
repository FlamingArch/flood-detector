import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: "AIzaSyA4v_IXWTQwk-_Wx7iT3zYZarLomDpgCbg",
    authDomain: "sih-flood-detector.firebaseapp.com",
    projectId: "sih-flood-detector",
    storageBucket: "sih-flood-detector.appspot.com",
    messagingSenderId: "771948200865",
    appId: "1:771948200865:web:c0f3650e2f1d8e9e7801e0",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user] = useAuthState(auth);

  function signInGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function signOut() {
    return auth.currentUser && auth.signOut();
  }

  return (
    <FirebaseContext.Provider
      value={{
        firebaseValues: {
          app: app,
          auth: auth,
          config: firebaseConfig,
        },
        signIn: signInGoogle,
        signOut: signOut,
        user: user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
