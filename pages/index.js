// import Map from "../components/Map";
import {
  Map,
  Page,
  BottomSheet,
  ListItem,
  LeadingRoadIcon,
  TopBar,
  Button,
} from "../components";
import { AppHead, AppTopBar } from "../components/fragments";
import { useState } from "react";
import { IconArrow, IconBack } from "../components/Icons";
import { sample } from "lodash";
import DetailsPage from "./DetailsPage";

export default function Home() {
  const [secondaryVisible, setSecondaryVisible] = useState(false);

  const sampleData = [
    {
      label: "Flood Chances",
      value: "Yes",
    },
    {
      label: "Latitude",
      value: "23.21213",
    },
    {
      label: "Longitude",
      value: "32.21213",
    },
    {
      label: "Sea Level",
      value: "546 Meters",
    },
    {
      label: "Temperature",
      value: "40.5 ºC",
    },
    {
      label: "Humidity",
      value: "23.32%",
    },
    {
      label: "Weather Conditions",
      value: "Cloudy / Drizzling",
    },
  ];

  return (
    <>
      <Page head={<AppHead />} topbar={!secondaryVisible && <AppTopBar />}>
        <Map />
        <BottomSheet title="Risky Roads Nearby">
          <ListItem
            leading={LeadingRoadIcon()}
            trailing={<IconArrow className="icon" />}
            title="Pasand Bagh Road"
            onClick={() => setSecondaryVisible(true)}
          >
            <p>Expected Flooding</p>
          </ListItem>
        </BottomSheet>
      </Page>
      {secondaryVisible && (
        <div
          animation={{ opacity: [0, 100] }}
          className="absolute top-0 left-0 w-screen h-screen pt-32 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-xl"
        >
          <TopBar
            title="NH-24 (Kanpur Road)"
            leading={
              <Button
                type="translucent"
                onClick={() => setSecondaryVisible(false)}
              >
                <IconBack className="icon" />
              </Button>
            }
          />
          <DetailsPage obj={sampleData} />
        </div>
      )}
    </>
  );
}
