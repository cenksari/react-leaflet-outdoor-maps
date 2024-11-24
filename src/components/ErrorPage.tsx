// interfaces
interface IProps {
  message: string;
}

const ErrorPage = ({ message }: IProps): JSX.Element => (
  <div>
    <p className='flex flex-h-center flex-v-center full-h'>{message}</p>
  </div>
);

export default ErrorPage;
