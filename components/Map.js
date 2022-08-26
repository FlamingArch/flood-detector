import Image from "next/image";
import {
  GoogleMap,
  MarkerF,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import { useTheme } from "./hooks";
import { useContext } from "react";
import { AppContext } from "./context";

import lightMap from "../public/Map.light.webp";
import darkMap from "../public/Map.dark.webp";
import { debugPrint } from "./helpers";
import { IconMapPin } from "./Icons";

const devMode = false;
const betterVisibility = false;

export default function Map({ markers, load }) {
  const { location: center, data } = useContext(AppContext);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: devMode
      ? null
      : process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY,
  });

  const { themeName: theme, isDarkMode } = useTheme();
  if (!isLoaded || load == false)
    return (
      <>
        {/* <img
          src={isDarkMode ? darkMap : lightMap}
          className="object-cover w-full h-full bg-white dark:bg-black -z-50"
        /> */}
        <div className="flex mt-[30vh] place-content-center">
          <div className="flex p-12 text-2xl bg-white rounded-lg place-items-center aspect-square backdrop-filter backdrop-blur-xl dark:bg-black bg-opacity:60 dark:bg-opacity-80">
            <div className="text-black opacity-80 dark:text-white">Loading</div>
          </div>
        </div>
      </>
    );

  return (
    <GoogleMap
      zoom={12}
      center={center}
      options={{
        disableDefaultUI: true,
      }}
      mapContainerClassName={
        "w-screen h-screen dark:-hue-rotate-[180deg] dark:invert " +
        (devMode ? "brightness-200 contrast-200" : "") +
        (betterVisibility ? " dark:brightness-[95%]" : 0)
      }
      mapContainerStyle={{}}
    >
      <MarkerF position={center} />
      {markers && markers.map((e, i) => <MarkerF key={i} position={e} />)}
      {data.data.map((e, i) => {
        debugPrint(`Marking ${e.latitude}, ${e.longitude}`);
        return (
          <OverlayView
            key={i}
            position={{
              lat: e.latitude,
              lng: e.longitude,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div
              className={
                "grid w-32 h-32 border rounded-full place-content-center bg-opacity-20 " +
                (e.class == "flood"
                  ? "bg-red-500 text-red-700 border-red-500"
                  : "bg-cyan-500 text-cyan-700 border-cyan-500")
              }
            >
              <p className="texl-3xl">
                {e.class == "flood" ? "Flood Zone" : "Road Clear"}
              </p>
            </div>
          </OverlayView>
        );
      })}
      {data.blockage.map((e, i) => {
        debugPrint(`Marking ${e.latitude}, ${e.longitude}`);
        return (
          <OverlayView
            key={i}
            position={{
              lat: e.latitude,
              lng: e.longitude,
            }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="grid w-4 h-4 bg-purple-500 border border-purple-500 rounded-full place-content-center filter blur-md"></div>
          </OverlayView>
        );
      })}
    </GoogleMap>
  );
}
