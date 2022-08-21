import Head from "next/head";
import { useTheme } from "../hooks";

function AppHead() {
  return (
    <Head>
      <title>Flood Detector</title>
      <meta name="description" content="SIH Final Project - Flood Detector" />
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="theme-color"
        content={useTheme().isDarkMode ? "#000000" : "#FFFFFF"}
      />
    </Head>
  );
}

export default AppHead;
