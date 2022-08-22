// import Map from "../components/Map";
import {
  Map,
  Page,
  BottomSheet,
  ListItem,
  LeadingRoadIcon,
} from "../components";
import { AppHead, AppTopBar } from "../components/fragments";
import { useEffect, useState } from "react";
import { IconArrow, IconBack } from "../components/Icons";
import DetailsPage from "./DetailsPage";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

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
  {
    label: "Pressure",
    value: "21.2432",
  },
];

export default function Home() {
  const [secondaryVisible, setSecondaryVisible] = useState(false);

  useEffect(() => {
    let data;
    axios
      .get("")
      .then((e) => {
        data = e;
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      <Page head={<AppHead />} topbar={<AppTopBar />}>
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

      <AnimatePresence>
        {secondaryVisible && (
          <DetailsPage
            obj={sampleData}
            closeFunction={() => setSecondaryVisible(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
