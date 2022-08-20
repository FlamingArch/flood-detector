import Head from "next/head";
import Map from "../components/Map";
import styles from "../styles/Home.module.scss";

import { Compass, IconMenu, MapSearch } from "../components/Icons";

import TopBar from "../components/TopBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Flood Detector</title>
        <meta name="description" content="SIH Final Project - Flood Detector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map />
      <TopBar title="Pasand Bagh, Karim Ganj">Hello, World!</TopBar>
    </div>
  );
}
