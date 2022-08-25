import { useEffect, useState } from "react";
import axios from "axios";

import {
  Map,
  Page,
  BottomSheet,
  ListItem,
  LeadingRoadIcon,
} from "../components";
import { AppHead, AppTopBar } from "../components/fragments";
import { IconArrow } from "../components/Icons";

import DetailsPage from "./details";

const sampleData = {
  size: 2,
  data: [
    {
      latitude: -80,
      longitude: 44,
      class: "flood",
      temp: 20,
      river: 10,
      elevation: 200,
      weather: "clear sky",
      humidity: 50,
      cloud: 40,
      wind: 5,
    },
    {
      latitude: 44,
      longitude: -80,
      class: "normal",
      temp: 20,
      river: 10,
      elevation: 200,
      weather: "clear sky",
      humidity: 50,
      cloud: 40,
      wind: 5,
    },
  ],
};
export default function Home() {
  const [data, setData] = useState(sampleData);

  useEffect(() => {
    console.log(`Data Changed: ${data}`);
  }, [data]);

  const [secondaryVisible, setSecondaryVisible] = useState(false);
  const detailsVisibility = {
    visible: secondaryVisible,
    setVisible: setSecondaryVisible,
  };
  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: 28.6077159025,
    lng: 77.224249103,
  });

  useEffect(() => {
    // if (navigator.geolocation) {
    //   navigator.permissions
    //     .query({ name: "geolocation" })
    //     .then(function (result) {
    //       if (result.state === "granted") {
    //         console.log(result.state);
    //         //If granted then you can directly call your function here
    //       } else if (result.state === "prompt") {
    //         console.log(result.state);
    //       } else if (result.state === "denied") {
    //         //If denied then you have to show instructions to enable location
    //       }
    //       result.onchange = function () {
    //         console.log(result.state);
    //       };
    //     });
    // } else {
    //   alert("Sorry Not available!");
    // }
    axios
      .get("localhost:3000/api/sample")
      .then((e) => {
        setData(e.data);
      })
      .catch((e) => {});
  }, []);

  return (
    <>
      <Page head={<AppHead />} topbar={<AppTopBar />}>
        <Map center={centerCoordinates} />
        <BottomSheet title="Risky Roads Nearby">
          <ListItem
            leading={LeadingRoadIcon()}
            trailing={<IconArrow className="icon" />}
            title="Pasand Bagh Road"
            onClick={() => detailsVisibility.setVisible(true)}
          >
            <p>Expected Flooding</p>
          </ListItem>
        </BottomSheet>
      </Page>

      <DetailsPage
        data={data.data[0]}
        title="NH-24 (Kanpur Road)"
        visibility={detailsVisibility}
      />
    </>
  );
}
