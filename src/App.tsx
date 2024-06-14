import React from 'react';

import { Map, LatLng, LatLngBounds } from 'leaflet';
import { Popup, Polygon, Tooltip, TileLayer, MapContainer } from 'react-leaflet';

// styles
import 'leaflet/dist/leaflet.css';

import './styles/circuit.css';
import './styles/circuit-light.css';

// components
import Legend from './components/Legend';
import Loading from './components/Loading';
import Information from './components/Information';
import CenterButton from './components/CenterButton';

// data
import data, { type IData } from './data/data';
import legend, { type ILegend } from './data/legend';

const App = (): React.JSX.Element => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [mapData, setMapData] = React.useState<IData | null>(null);
  const [mapReference, setMapReference] = React.useState<Map | null>(null);
  const [legendData, setLegendData] = React.useState<ILegend[] | null>(null);
  const [maxMapBounds, setMaxMapBounds] = React.useState<LatLngBounds | null>(null);

  const preventClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const getData: IData = data;

    setMapData(data);

    setLegendData(legend);

    setMaxMapBounds(
      new LatLngBounds(
        new LatLng(getData.maxBounds.southWest[0], getData.maxBounds.southWest[1]),
        new LatLng(getData.maxBounds.northEast[0], getData.maxBounds.northEast[1])
      )
    );

    document.addEventListener('contextmenu', preventClick);

    setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => document.removeEventListener('contextmenu', preventClick);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!mapData) {
    return (
      <div>
        <p className='flex flex-h-center flex-v-center full-h'>No map data found!</p>
      </div>
    );
  }

  return (
    <div>
      <Information name={mapData.name} logo={mapData.topLogo} />

      <CenterButton
        map={mapReference}
        zoomLevel={mapData.defaultZoom}
        centerCoords={mapData.centerCoords}
      />

      <MapContainer
        minZoom={15}
        scrollWheelZoom
        ref={setMapReference}
        maxBounds={maxMapBounds!}
        zoom={mapData.defaultZoom}
        center={mapData.centerCoords}
      >
        {/* Dark Layer */}
        {/* <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' /> */}
        {/* Light Layer */}
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {/* Satellite Layer */}
        {/* <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' /> */}
        {mapData?.locations?.map((loc) => (
          <Polygon key={loc.id} pathOptions={{ color: loc.color }} positions={loc.shapeCoords}>
            <Tooltip>{loc.title}</Tooltip>
            <Popup>
              <strong>{loc.title}</strong>
              <p>{loc.description}</p>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      <Legend
        data={legendData}
        map={mapReference}
        logo={mapData.bottomLogo}
        locations={mapData.locations}
      />
    </div>
  );
};

export default App;
