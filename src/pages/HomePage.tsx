import React from 'react';

import type { Map } from 'leaflet';
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

// types
import type { IData } from '../types/types';

// utils
import { getResponse, type IRequest } from '../utils/Request';

const HomePage = (): React.JSX.Element => {
  const { theme, changeTheme } = useTheme();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [mapData, setMapData] = React.useState<IData | null>(null);
  const [mapRefer, setMapRefer] = React.useState<Map | null>(null);

  /**
   * Prevents the default behavior of the mouse event.
   *
   * @param {MouseEvent} e - The mouse event to prevent.
   * @return {void} This function does not return anything.
   */
  const preventClick = (e: MouseEvent): void => {
    e.preventDefault();
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      import('../styles/circuit-dark.css');
    } else {
      import('../styles/circuit-light.css');
    }

    const getData = async () => {
      const parameters: IRequest = {
        url: 'data.json',
        method: 'GET',
      };

      const response = await getResponse(parameters);

      if (response.status === 200) {
        setMapData(response.data);
      }

      setLoading(false);
    };

    getData();

    document.addEventListener('contextmenu', preventClick);

    return () => document.removeEventListener('contextmenu', preventClick);
  }, [theme]);

  /**
   * Change the application theme based on the current theme.
   *
   * @return {void} No return value
   */
  const changeAppTheme = (): void => {
    setLoading(true);

    changeTheme(theme === 'light' ? 'dark' : 'light');

    document.location.reload();
  };

  if (loading) {
    return <Loading />;
  }

  if (!mapData) {
    return <ErrorPage message='No map data found! Please check your configuration settings.' />;
  }

  return (
    <>
      <Information name={mapData.name} logo={mapData.topLogo} />

      <CenterButton
        map={mapRefer}
        zoomLevel={mapData.defaultZoom}
        centerCoords={mapData.centerCoords}
      />

      <ThemeButton theme={theme} onChangeTheme={changeAppTheme} />

      <MapContainer
        minZoom={15}
        scrollWheelZoom
        ref={setMapRefer}
        zoom={mapData.defaultZoom}
        center={mapData.centerCoords}
        maxBounds={mapData.maxMapBounds}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {mapData?.locations?.map((loc) => <MapLocation key={loc.id} location={loc} />)}
      </MapContainer>

      <Legend map={mapRefer} data={mapData} />
    </>
  );
};

export default HomePage;
