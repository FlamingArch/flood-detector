import { TopBar, Button } from "..";
import { IconCompass, IconMenu, IconMapSearch } from "../Icons";

export default function AppTopBar() {
  return (
    <TopBar
      leading={
        <Button type="transparent">
          <IconMenu className="icon" />
        </Button>
      }
      title="Pasand Bagh, Karim Ganj"
    >
      <Button type="translucent">
        <IconMapSearch className="icon" />
      </Button>
      <Button type="translucent">
        <IconCompass className="icon" />
      </Button>
    </TopBar>
  );
}
