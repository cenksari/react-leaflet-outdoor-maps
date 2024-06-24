import React from 'react';

import type { Map } from 'leaflet';

import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer } from 'react-leaflet';

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
import type { IData, ILocation } from '../types/types';

// utils
import { getResponse } from '../utils/Request';

const HomePage = (): React.JSX.Element => {
  const { theme, changeTheme } = useTheme();

  const [mapRef, setMapRef] = React.useState<Map | null>(null);
  const [myLocation, setMyLocation] = React.useState<IMyLocation | null>(null);

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ['data'],
    queryFn: async () => {
      const response = await getResponse({ url: 'data.json', method: 'GET' });

      if (response.status === 200) return response.data as IData;

      throw new Error(response.data.title);
    },
    refetchOnWindowFocus: false,
  });

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
   * Retrieves the user's current location and updates the state with the result.
   *
   * @return {Promise<void>} A promise that resolves when the location is retrieved and the state is updated.
   */
  const getMyLocation = async (): Promise<void> => {
    const ll: IMyLocation = await Geo.getUserLocation();

    if (ll !== null && ll.status) {
      setMyLocation(ll);
    } else {
      setMyLocation(null);
    }
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      import('../styles/circuit-dark.css');
    } else {
      import('../styles/circuit-light.css');
    }

    document.addEventListener('contextmenu', preventClick);

    return () => document.removeEventListener('contextmenu', preventClick);
  }, [theme]);

  React.useEffect(() => {
    const runAsync = async () => {
      const geoPermissions = await Geo.checkPermission();

      if (geoPermissions) {
        await getMyLocation();
      }
    };

    runAsync();
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

  if (isLoading) return <Loading />;

  if (isError || !data) {
    return (
      <ErrorPage
        message={`No map data found! Please check your configuration settings. ${error}`}
      />
    );
  }

  return (
    <>
      <Information name={data.name} logo={data.topLogo} />

      <CenterButton map={mapRef} zoomLevel={data.defaultZoom} centerCoords={data.centerCoords} />

      <LocationButton show={!myLocation} onSetLocation={getMyLocation} />

      <ThemeButton theme={theme} onChangeTheme={changeAppTheme} />

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
      </MapContainer>

      <Legend map={mapRef} data={data} />
    </>
  );
};

export default HomePage;
