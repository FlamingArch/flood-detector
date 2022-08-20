import Head from "next/head";
import Map from "../components/Map";
import styles from "../styles/Home.module.scss";

import { IconCompass, IconMenu, IconMapSearch } from "../components/Icons";

import TopBar from "../components/TopBar";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flood Detector</title>
        <meta name="description" content="SIH Final Project - Flood Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
      <TopBar
        leading={
          <Button type="transparent">
            <IconMenu className="w-4 h-4 icon" />
          </Button>
        }
        title="Pasand Bagh, Karim Ganj"
      >
        <Button type="translucent">
          <IconMapSearch className="w-4 h-4 icon" />
        </Button>
        <Button type="translucent">
          <IconCompass className="w-4 h-4 icon" />
        </Button>
      </TopBar>
    </div>
  );
}
