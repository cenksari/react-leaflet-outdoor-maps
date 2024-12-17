// interfaces
interface IProps {
  message: string;
}

const ErrorPage: React.FC<IProps> = ({ message }) => (
  <div>
    <p className='flex flex-h-center flex-v-center full-h'>{message}</p>
  </div>
);

export default ErrorPage;
