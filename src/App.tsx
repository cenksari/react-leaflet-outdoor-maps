import React from 'react';

import { LatLng, LatLngBounds, type LatLngExpression } from 'leaflet';
import { Popup, Polygon, Tooltip, TileLayer, MapContainer } from 'react-leaflet';

// styles
import 'leaflet/dist/leaflet.css';

// components
import Legend from './components/Legend';
import Loading from './components/Loading';
import Information from './components/Information';
import CenterButton from './components/CenterButton';

// data
import data from './data/data';

const App = (): React.JSX.Element => {
  const maxBounds = React.useMemo(
    () =>
      new LatLngBounds(
        new LatLng(35.35111503766667, 138.91031946772557),
        new LatLng(35.3899236884726, 138.9528485729159)
      ),
    []
  );

  const [defaultZoomLevel] = React.useState<number>(16);
  const [mapRef, setMapRef] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [centerCoords] = React.useState<LatLngExpression>([35.370002237772944, 138.92797321568233]);

  const preventClick = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    document.addEventListener('contextmenu', preventClick);

    setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => document.removeEventListener('contextmenu', preventClick);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Information />

      <CenterButton map={mapRef} zoomLevel={defaultZoomLevel} centerCoords={centerCoords} />

      <MapContainer
        minZoom={15}
        ref={setMapRef}
        scrollWheelZoom
        center={centerCoords}
        maxBounds={maxBounds}
        zoom={defaultZoomLevel}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {/* <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}' /> */}
        {data.map((loc) => (
          <Polygon key={loc.id} pathOptions={{ color: loc.color }} positions={loc.shapeCoords}>
            <Tooltip>{loc.title}</Tooltip>
            <Popup>
              <strong>{loc.title}</strong>
              <p>{loc.description}</p>
            </Popup>
          </Polygon>
        ))}
      </MapContainer>

      <Legend map={mapRef} />
    </>
  );
};

export default App;
