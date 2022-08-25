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
  const { data, fetchData, fetchLocation, currentLocation, showDetails } =
    useContext(AppContext);

  useEffect(() => {
    fetchLocation();
    fetchData();
  }, []);
  return (
    <>
      <Page head={<AppHead />} topbar={<AppTopBar />}>
        <Map center={currentLocation} />
        <BottomSheet title="Risky Roads Nearby">
          {data.data.map((e, i) => {
            return (
              <ListItem
                key={i}
                leading={LeadingRoadIcon()}
                trailing={<IconArrow className="icon" />}
                title={e.title || "Unnamed Road"}
                onClick={() => showDetails(e)}
              >
                <p>Expected Flooding</p>
              </ListItem>
            );
          })}
        </BottomSheet>
      </Page>

      <DetailsPage />
    </>
  );
}
