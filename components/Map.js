import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";
import { useTheme } from "./hooks";
import { IconMapPin } from "./Icons";

export default function Map({ center }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY,
  });

  const { themeName: theme } = useTheme();
  if (!isLoaded)
    return (
      <Image
        // src={`https://source.unsplash.com/random/2300x1000`}
        src={`/../public/Map.${theme}.png`}
        className="-z-50"
        layout="fill"
        alt=""
      />
    );

  return (
    <GoogleMap
      zoom={12}
      center={center}
      mapContainerClassName="w-screen h-screen"
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
