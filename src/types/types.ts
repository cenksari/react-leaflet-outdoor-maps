import type { LatLngExpression, LatLngBoundsExpression } from 'leaflet';

export interface ILegend {
  id: number;
  name: string;
  icon: string;
  color: string;
}

interface IShape {
  type: string;
  radius?: number;
  location: LatLngExpression[];
}

export interface ILocation {
  id: number;
  title: string;
  shape: IShape;
  category: ILegend;
  description: string;
}

export interface IData {
  id: number;
  name: string;
  topLogo: string;
  legend: ILegend[];
  bottomLogo: string;
  defaultZoom: number;
  locations: ILocation[];
  centerCoords: LatLngExpression;
  maxMapBounds: LatLngBoundsExpression;
}
