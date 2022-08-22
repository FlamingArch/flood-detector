import { ListItem } from "../components";

export default function DetailsPage({ obj }) {
  return (
    <div className="flex flex-col gap-6 p-6">
      {obj.map((e, index) => (
        <ListItem key={index}>
          <div className="flex flex-row w-full text-black space-between dark:text-white">
            <p className="flex-grow font-bold">{e.label}</p>
            <p>{e.value}</p>
          </div>
        </ListItem>
      ))}
    </div>
  );
}
