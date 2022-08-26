import Image from "next/image";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useTheme } from "./hooks";
import { useContext } from "react";
import { AppContext } from "./context";

import lightMap from "../public/Map.light.webp";
import darkMap from "../public/Map.dark.webp";

const devMode = false;
const betterVisibility = false;

export default function Map({ markers, load }) {
  const { location: center } = useContext(AppContext);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: devMode
      ? null
      : process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY,
  });

  const { themeName: theme, isDarkMode } = useTheme();
  if (!isLoaded || load == false)
    return (
      <>
        <Image
          src={isDarkMode ? darkMap : lightMap}
          className="object-cover -z-50"
          layout="fill"
          alt=""
        />
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
    </GoogleMap>
  );
}
