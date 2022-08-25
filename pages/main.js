import {
  Map,
  Page,
  BottomSheet,
  ListItem,
  LeadingRoadIcon,
} from "../components";
import { IconArrow } from "../components/Icons";
import { AppContext } from "./context";
import { useContext, useEffect } from "react";
import DetailsPage from "./details";

import { AppHead, AppTopBar } from "../components/fragments";

export default function MainPage() {
  const { data, currentLocation, showDetails, fetchLocation, fetchData } =
    useContext(AppContext);

  useEffect(() => {
    fetchLocation();
    fetchData();
  }, []);

  console.log(data.data);

  return (
    <>
      <Page head={<AppHead />} topbar={<AppTopBar />}>
        <Map center={currentLocation} />
        <BottomSheet title="Roads Nearby">
          {data.data.length > 0 ? (
            data.data.map((e, i) => (
              <ListItem
                key={i}
                leading={LeadingRoadIcon()}
                trailing={<IconArrow className="icon" />}
                title={e.title || "Unnamed Road"}
                onClick={() => showDetails(e)}
              >
                <p>Expected Flooding</p>
              </ListItem>
            ))
          ) : (
            <div className="flex flex-row content-center justify-center p-4">
              Loading Data...
            </div>
          )}
        </BottomSheet>
      </Page>

      <DetailsPage />
    </>
  );
}
