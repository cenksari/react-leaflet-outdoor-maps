import { useState, useEffect } from 'react';

import type { Map } from 'leaflet';

import { MapContainer, TileLayer, Circle } from 'react-leaflet';

// hooks
import useTheme from '../hooks/useTheme';

// styles
import 'leaflet/dist/leaflet.css';
import '../styles/circuit-core.css';

// components
import Legend from '../components/Legend';
import Loading from '../components/Loading';
import ErrorPage from '../components/ErrorPage';
import MapLocation from '../components/MapLocation';
import Information from '../components/Information';
import ThemeButton from '../components/ThemeButton';
import CenterButton from '../components/CenterButton';
import LocationButton from '../components/LocationButton';

// types
import Geo, { type IMyLocation } from '../utils/Geo';
import type { IData, ILocation, IPosition } from '../types/types';

// utils
import { getResponse } from '../utils/Request';

const HomePage: React.FC = () => {
  const { theme, changeTheme } = useTheme();

  const [data, setData] = useState<IData | null>(null);
  const [mapRef, setMapRef] = useState<Map | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [myLocation, setMyLocation] = useState<IPosition | null>(null);

  /**
   * Prevents the default behavior of the mouse event.
   *
   * @param {MouseEvent} e - The mouse event to prevent.
   * @return {void} This function does not return anything.
   */
  const preventClick = (e: MouseEvent): void => {
    e.preventDefault();
  };

  /**
   * Subscribes to the user's location updates and updates the state with the new location.
   *
   * @return {void} This function does not return anything.
   */
  const subscribeLocation = (): void => {
    navigator.geolocation.watchPosition(
      (pos) => {
        setMyLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => {
        setMyLocation(null);
      },
      {
        timeout: 5000,
        maximumAge: 20000,
        enableHighAccuracy: true,
      }
    );
  };

  /**
   * Retrieves the user's current location and updates the state with the result.
   *
   * @return {Promise<void>} A promise that resolves when the location is retrieved and the state is updated.
   */
  const getMyLocation = async (): Promise<void> => {
    const ll: IMyLocation = await Geo.getUserLocation();

    if (ll !== null && ll.status) {
      subscribeLocation();
    } else {
      setMyLocation(null);
    }
  };

  useEffect(() => {
    if (theme === 'dark') {
      import('../styles/circuit-dark.css');
    } else {
      import('../styles/circuit-light.css');
    }
  }, [theme]);

  useEffect(() => {
    const runAsync = async () => {
      const response = await getResponse({ url: 'data.json', method: 'GET' });

      if (response.status === 200) {
        setData(response.data as IData);

        setLoading(false);
      }

      const geoPermissions = await Geo.checkPermission();

      if (geoPermissions) subscribeLocation();
    };

    runAsync();

    document.addEventListener('contextmenu', preventClick);

    return () => document.removeEventListener('contextmenu', preventClick);
  }, []);

  /**
   * Change the application theme based on the current theme.
   *
   * @return {void} No return value
   */
  const changeAppTheme = (): void => {
    changeTheme(theme === 'light' ? 'dark' : 'light');

    document.location.reload();
  };

  if (loading) return <Loading />;

  if (!data) {
    return <ErrorPage message='No map data found! Please check your configuration settings.' />;
  }

  return (
    <>
      <Information name={data.name} logo={data.topLogo} />

      <ThemeButton theme={theme} onChangeTheme={changeAppTheme} />

      <LocationButton show={!myLocation} onSetLocation={getMyLocation} />

      <CenterButton map={mapRef} zoomLevel={data.defaultZoom} centerCoords={data.centerCoords} />

      <MapContainer
        minZoom={15}
        ref={setMapRef}
        scrollWheelZoom
        zoom={data.defaultZoom}
        center={data.centerCoords}
        maxBounds={data.maxMapBounds}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {data.locations?.map((loc: ILocation) => <MapLocation key={loc.id} location={loc} />)}
        {myLocation && (
          <Circle
            radius={10}
            center={[myLocation.lat, myLocation.lng]}
            pathOptions={{ color: 'blue', fillColor: 'blue', stroke: true }}
          />
        )}
      </MapContainer>

      <Legend map={mapRef} data={data} />
    </>
  );
};

export default HomePage;
