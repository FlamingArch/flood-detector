import Image from "next/image";
import useTheme from "./hooks/useTheme";

export default function Map() {
  const { themeName: theme } = useTheme();
  console.log(theme);

  return (
    <Image
      // src={`https://source.unsplash.com/random/2300x1000`}
      src={`/../public/Map.${theme}.png`}
      className="-z-50"
      layout="fill"
      alt=""
    />
  );
}
