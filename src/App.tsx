import React from 'react';

import { Map, LatLng, LatLngBounds } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

// hooks
import useTheme from './hooks/useTheme';

// styles
import 'leaflet/dist/leaflet.css';
import './styles/circuit-core.css';

// components
import Legend from './components/Legend';
import Loading from './components/Loading';
import ErrorPage from './components/ErrorPage';
import MapPolygon from './components/MapPolygon';
import Information from './components/Information';
import ThemeButton from './components/ThemeButton';
import CenterButton from './components/CenterButton';

// data
import data, { type IData } from './data/data';
import legend, { type ILegend } from './data/legend';

const App = (): React.JSX.Element => {
  const { theme, changeTheme } = useTheme();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [mapData, setMapData] = React.useState<IData | null>(null);
  const [mapRefer, setMapRefer] = React.useState<Map | null>(null);
  const [legendData, setLegendData] = React.useState<ILegend[] | null>(null);
  const [maxMapBounds, setMaxMapBounds] = React.useState<LatLngBounds | undefined>();

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
      import('./styles/circuit-dark.css');
    } else {
      import('./styles/circuit-light.css');
    }

    const getData = data;
    const getLegend = legend;

    setMapData(getData);

    setLegendData(getLegend);

    setMaxMapBounds(
      new LatLngBounds(
        new LatLng(getData.maxBounds.southWest[0], getData.maxBounds.southWest[1]),
        new LatLng(getData.maxBounds.northEast[0], getData.maxBounds.northEast[1])
      )
    );

    document.addEventListener('contextmenu', preventClick);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

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
    return <ErrorPage message='No map data found!' />;
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
        maxBounds={maxMapBounds}
        zoom={mapData.defaultZoom}
        center={mapData.centerCoords}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {mapData?.locations?.map(
          (loc) => loc.shape === 'polygon' && <MapPolygon key={loc.id} location={loc} />
        )}
      </MapContainer>

      <Legend
        map={mapRefer}
        data={legendData}
        logo={mapData.bottomLogo}
        locations={mapData.locations}
      />
    </>
  );
};

export default App;
