// import styles from "../styles/Map.module.scss";

import Image from "next/image";
import useTheme from "./hooks/useTheme";

export default function Map() {
  const { themeName: theme } = useTheme();
  console.log(theme);

  return (
    <Image
      src={`/../public/Map.${theme}.png`}
      className="-z-50"
      layout="fill"
      alt=""
    />
  );
}
