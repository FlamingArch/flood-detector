import { useGeolocated } from "react-geolocated";
import { createContext, useState, useEffect } from "react";
import {
  constants,
  debugPrint,
  geocode,
  httpPost,
  reverseGeocode,
} from "./helpers";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(constants.fallbackData);
  const [location, setLocation] = useState(constants.fallbackLocation);
  const [locationName, setLocationName] = useState("Bhicholi Hapsi, Indore");
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated(constants.useGeolocatedOptions);
  const [detailsData, setDetailsData] = useState({});
  const [detailsVisibility, setDetailsVisibility] = useState(false);

  useEffect(() => {
    debugPrint(`Data Changed: ${JSON.stringify(data)}`);
  }, [data]);

  useEffect(() => {
    debugPrint(`Location Changed: ${JSON.stringify(location)}`);
    reverseGeocode(location.lat, location.lng, (s) => setLocationName(s));
    fetchData();
  }, [location]);

  const fetchLocation = () => {
    if (isGeolocationAvailable) debugPrint("Geolocation available");
    if (isGeolocationEnabled) debugPrint("Geolocation enabled");
    if (coords) {
      debugPrint(`Current Location: ${coords.latitude}, ${coords.longitude}`);
      setLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    }
  };

  const showDetails = (data) => {
    setDetailsData(data);
    setDetailsVisibility(true);
  };

  const fetchData = () => {
    constants.invalidateOldDataOnRefetch && setData({ size: 0, data: [] });
    httpPost(
      constants.alwaysUseFallbackData
        ? "https://reqres.in/api/users"
        : constants.apiUrl,
      constants.alwaysUseFallbackData
        ? constants.fallbackData
        : {
            latitude: location.lat,
            longitude: location.lng,
          },
      (data) => setData(data.data),
      (error) => debugPrint(`fetchData: Error ${error}`)
    );
  };

  const searchLocation = (name) => {
    if (name == "") return;
    geocode(name, (e) => setLocation(e));
  };

  return (
    <AppContext.Provider
      value={{
        data: data,
        detailsVisibility: detailsVisibility,
        setDetailsVisibility: setDetailsVisibility,
        fetchLocation: fetchLocation,
        fetchData: fetchData,
        showDetails: showDetails,
        detailsData: detailsData,
        location: location,
        locationName: locationName,
        searchLocation: searchLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
