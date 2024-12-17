// interfaces
interface IProps {
  name: string;
  logo?: string;
}

const Information: React.FC<IProps> = ({ name, logo }) => (
  <div className='information'>
    {logo ? <img src={logo} width='150' alt='' draggable='false' /> : <strong>{name}</strong>}
  </div>
);

export default Information;
