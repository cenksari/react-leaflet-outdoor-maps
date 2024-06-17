export interface ILegend {
  id: number;
  name: string;
  icon: string;
  color: string;
}

const legend: ILegend[] = [
  {
    id: 1,
    name: 'Car parking',
    icon: 'local_parking',
    color: 'purple',
  },
  {
    id: 2,
    name: 'Restaurant',
    icon: 'restaurant',
    color: 'yellow',
  },
  {
    id: 3,
    name: 'Toilets',
    icon: 'follow_the_signs',
    color: 'green',
  },
  {
    id: 4,
    name: 'Media area',
    icon: 'videocam',
    color: 'orange',
  },
  {
    id: 5,
    name: 'Event area',
    icon: 'celebration',
    color: 'navy',
  },
];

export default legend;
