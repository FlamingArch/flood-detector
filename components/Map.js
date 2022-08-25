import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";
import { useTheme } from "./hooks";
import { IconMapPin } from "./Icons";

const devMode = false;
const betterVisibility = false;

export default function Map({ center }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: devMode
      ? null
      : process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY,
  });

  const { themeName: theme } = useTheme();
  if (!isLoaded)
    return (
      <>
        <Image
          src={`/../public/Map.${theme}.webp`}
          className="object-cover -z-50"
          layout="fill"
          alt=""
        />
        <div className="flex mt-[30vh] place-content-center">
          <div className="flex p-12 text-2xl bg-white rounded-lg place-items-center aspect-square backdrop-filter backdrop-blur-xl dark:bg-black bg-opacity:60 dark:bg-opacity-80">
            <div className="opacity-80">Loading</div>
          </div>
        </div>
      </>
    );

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName={
        "w-screen h-screen dark:-hue-rotate-[180deg] dark:invert " +
        (devMode ? "brightness-200 contrast-200" : "") +
        (betterVisibility ? " dark:brightness-[95%]" : 0)
      }
      mapContainerStyle={{}}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
