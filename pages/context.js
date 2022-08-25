import { useGeolocated } from "react-geolocated";
import { createContext, useState, useEffect } from "react";
import { httpGet, httpPost } from "./networking";

const url = "https://reqres.in/api/users";
const updateData = false;

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
    setTimeout(() => {
      if (isGeolocationAvailable) console.log("Geolocation available");
      if (isGeolocationEnabled) console.log("Geolocation enabled");
      if (coords) {
        console.log(
          `Current Location: ${coords.latitude}, ${coords.longitude}`
        );
        setCurrentLocation({
          lat: coords.latitude,
          lng: coords.longitude,
        });
      }
    }, 200);
  };

  const reverseGeocode = () => {
    var base_url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${currentLocation.lat}&lon=${currentLocation.lng}&limit=5`;
    var api_key = `&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_APIKEY}`;
    var url = `${base_url}${api_key}`;
    console.log(url);
    httpGet(url, (e) => {
      console.log(e);
      setLocationName(
        `${e.data[0].name}, ${e.data[0].state}, ${e.data[0].country}`
      );
      console.log(currentLocation);
    });
  };

  useEffect(() => {
    reverseGeocode();
    fetchData();
  }, [currentLocation]);

  //#endregion

  //#region HTTP
  const [data, setData] = useState({
    size: 2,
    data: [
      {
        latitude: 44,
        longitude: -80,
        class: "flood",
        temperature: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
      {
        latitude: 44,
        longitude: -80,
        class: "normal",
        temp: 20,
        river: 10,
        elevation: 200,
        weather: "clear sky",
        humidity: 50,
        cloud: 40,
        wind: 5,
      },
    ],
  });
  const fetchData = () => {
    console.log("context::fetchData");
    httpPost(
      url,
      {
        lat: currentLocation.lat,
        lng: currentLocation.lng,
      },
      (e) => {
        console.log(e.data);
        updateData && setData(e.data);
      }
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
  const [locationName, setLocationName] = useState("Bhicholi Hapsi, Indore");

  const showDetails = (data) => {
    setDetailsData(data);
    setDetailsPageVisible(true);
  };

  //#endregion

  //#region Geoencoding
  const searchLocation = (location) => {
    var base_url = `http://api.openweathermap.org/geo/1.0/direct?`;
    var api_key = `&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_APIKEY}`;
    var owm_url = `${base_url}q=${searchTerm.replace(
      " ",
      ""
    )}&limit=5${api_key}`;
    console.log(owm_url);
    if (searchTerm === "" && location == undefined) return;
    console.log(`GEOCODE: Searching for ${searchTerm}`);
    httpGet(owm_url, (e) => {
      console.log(e);
      setCurrentLocation({ lat: e.data[0].lat, lng: e.data[0].lon });
      console.log(currentLocation);
    });
  };

  //#endregion

  //#region Search
  const [searchTerm, setSearchTerm] = useState("");
  //#endregion
  return (
    <AppContext.Provider
      value={{
        currentLocation: currentLocation,
        data: data,
        fetchData: fetchData,
        fetchLocation: fetchLocation,
        searchLocation: searchLocation,
        showDetails: showDetails,
        locationName: locationName,
        detailsPage: {
          data: detailsData,
          visibility: detailsVisibility,
        },
        searchTerm: searchTerm,
        setSearchTerm: setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
