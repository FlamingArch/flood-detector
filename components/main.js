import { useContext, useEffect } from "react";
import { Map, Page, BottomSheet, ListItem, LeadingRoadIcon, Button } from ".";
import { IconArrow, IconGoogle } from "./Icons";
import { AppContext } from "./context";
import DetailsPage from "./details";
import Image from "next/image";
import logo from "../public/logo.webp";

import { AppHead, AppTopBar } from "./fragments";
import { FirebaseContext } from "./fireabase";

export default function MainPage() {
  const { user, signIn } = useContext(FirebaseContext);

  if (!user) {
    return <SignInPage func={signIn} />;
  }
  return (
    <>
      <Dashboard />
      <DetailsPage />
    </>
  );
}

const Dashboard = () => {
  const { data, currentLocation, showDetails, fetchLocation, fetchData } =
    useContext(AppContext);

  useEffect(() => {
    fetchLocation();
    fetchData();
  }, []);

  console.log(data.data);

  return (
    <Page head={<AppHead />} topbar={<AppTopBar />}>
      <Map center={currentLocation} />
      <legend />
      <BottomSheet title="Roads Nearby">
        {data.data.length > 0 ? (
          data.data.map((e, i) => {
            return (
              <ListItem
                key={i}
                leading={LeadingRoadIcon()}
                trailing={<IconArrow className="icon" />}
                title={e.title || "Unnamed Road"}
                onClick={() => showDetails(e)}
              >
                {e.class == "flood" ? (
                  <p className="text-red-700">Expected Flooding</p>
                ) : (
                  <p>Road Clear</p>
                )}
              </ListItem>
            );
          })
        ) : (
          <div className="flex flex-row content-center justify-center p-4">
            Loading Data...
          </div>
        )}
      </BottomSheet>
    </Page>
  );
};

export const SignInPage = ({ func }) => (
  <Page head={<AppHead />}>
    <Image
      src={
        "https://unsplash.com/photos/nrnd1-fTsdQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYxNTExMjg5&force=true&w=2400"
      }
      layout="fill"
      alt=""
      className="object-cover position-center -z-10"
    />
    <div className="grid w-screen h-screen overflow-hidden place-content-center">
      <div className="grid gap-4 p-12 bg-white rounded-2xl bg-opacity-60 place-content-center backdrop-blur-xl dark:bg-black dark:bg-opacity-60">
        <Image layout="responsive" alt="" src={logo} />
        <p className="text-xl text-center text-black font-regular dark:text-white">
          Not Signed In
        </p>
        <Button type="translucent" onClick={func}>
          <div className="flex items-center w-full gap-6 mx-2 space-between">
            <IconGoogle className="icon" /> Sign In with Google{" "}
            <div className=""></div>
          </div>
        </Button>
      </div>
    </div>
  </Page>
);

export const Legand = () => <div className="flex-row flex-gap-2"></div>;
