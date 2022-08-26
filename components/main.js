import { useContext, useEffect } from "react";
import { Map, Page, BottomSheet, ListItem, LeadingRoadIcon, Button } from ".";
import { IconArrow } from "./Icons";
import { AppContext } from "./context";
import DetailsPage from "./details";

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
                  <p>Expected Flooding</p>
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
    <Map load={false} />
    <div className="absolute top-0 left-0 grid w-screen h-screen gap-4 bg-white bg-opacity-0 place-content-center backdrop-blur-xl dark:bg-black dark:bg-opacity-0">
      <p className="text-3xl font-thin text-black dark:text-white">
        Not Signed In
      </p>
      <Button type="translucent" onClick={func}>
        Sign In
      </Button>
    </div>
  </Page>
);
