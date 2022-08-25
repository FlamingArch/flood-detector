import { useGeolocated } from "react-geolocated";
import { createContext, useState, useEffect } from "react";
import { httpGet } from "./networking";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  //#region Location
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: { enableHighAccuracy: true },
      userDecisionTimeout: 12000,
    });

  const [currentLocation, setCurrentLocation] = useState({
    lat: 22.636295309999994,
    lng: 75.85173033999997,
  });

  const fetchLocation = () => {
    if (isGeolocationAvailable) console.log("Geolocation available");
    if (isGeolocationEnabled) console.log("Geolocation enabled");

    if (coords) {
      console.log(`Current Location: ${coords.latitude}, ${coords.longitude}`);
      setCurrentLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    }
  };

  //#endregion

  //#region HTTP
  const [data, setData] = useState({
    size: 0,
    data: [],
  });
  const fetchData = () => {
    httpGet(
      "http://localhost:3000/api/sample",
      (e) => {
        console.log(`Fetched Data: ${JSON.stringify(e.data)}`);
        setData(e.data);
      },
      () => console.log("Fetch Data Error")
    );
  };

  useEffect(() => {
    console.log(`Data Changed: ${JSON.stringify(data)}`);
  }, [data]);
  //#endregion

  //#region DetailsPage

  const [detailsPageVisible, setDetailsPageVisible] = useState(false);
  const detailsVisibility = {
    visible: detailsPageVisible,
    setVisible: setDetailsPageVisible,
  };

  const [detailsData, setDetailsData] = useState({});

  const showDetails = (data) => {
    setDetailsData(data);
    setDetailsPageVisible(true);
  };

  //#endregion
  return (
    <AppContext.Provider
      value={{
        currentLocation: currentLocation,
        data: data,
        fetchData: fetchData,
        fetchLocation: fetchLocation,
        showDetails: showDetails,
        detailsPage: {
          data: detailsData,
          visibility: detailsVisibility,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
