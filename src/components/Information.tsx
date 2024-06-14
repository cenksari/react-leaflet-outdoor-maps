import React from 'react';

// interfaces
interface IProps {
  name: string;
  logo?: string;
}

const Information = ({ name, logo }: IProps): React.JSX.Element => (
  <div className='information'>
    {logo ? <img src={logo} width='150' alt={name} draggable='false' /> : <strong>{name}</strong>}
  </div>
);

export default Information;
