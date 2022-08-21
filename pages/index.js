// import Map from "../components/Map";
import {
  Map,
  Page,
  BottomSheet,
  ListItem,
  LeadingRoadIcon,
} from "../components";
import { AppHead, AppTopBar } from "../components/fragments";

import { IconArrow } from "../components/Icons";

export default function Home() {
  return (
    <Page head={<AppHead />} topbar={<AppTopBar />}>
      <Map />
      <BottomSheet title="Risky Roads Nearby">
        <ListItem
          leading={LeadingRoadIcon()}
          trailing={<IconArrow className="icon" />}
          title="Pasand Bagh Road"
        >
          <p>Expected Flooding</p>
        </ListItem>
      </BottomSheet>
    </Page>
  );
}
