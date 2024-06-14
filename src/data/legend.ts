export interface ILegend {
  id: number;
  name: string;
  icon: string;
}

const legend: ILegend[] = [
  {
    id: 1,
    name: 'Car parking',
    icon: 'local_parking',
  },
  {
    id: 2,
    name: 'Restaurant',
    icon: 'restaurant',
  },
  {
    id: 3,
    name: 'Toilets',
    icon: 'follow_the_signs',
  },
  {
    id: 4,
    name: 'Media area',
    icon: 'videocam',
  },
  {
    id: 5,
    name: 'Event area',
    icon: 'celebration',
  },
];

export default legend;
