import React from 'react';

interface IProps {
  name: string;
  logo: string | null;
}

const Information = ({ name, logo }: IProps): React.JSX.Element => (
  <div className='information'>
    {logo ? <img src={logo} width='150' alt={name} draggable='false' /> : <strong>{name}</strong>}
  </div>
);

export default Information;
