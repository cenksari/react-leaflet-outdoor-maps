// interfaces
interface IProps {
  theme: string;
  onChangeTheme: () => void;
}

const ThemeButton: React.FC<IProps> = ({ theme, onChangeTheme }) => (
  <div className='theme-button flex flex-v-center flex-h-center'>
    <button
      type='button'
      title='Change theme'
      onClick={() => onChangeTheme()}
      className='flex flex-h-center flex-v-center pointer'
    >
      <span className='material-symbols-outlined'>
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  </div>
);

export default ThemeButton;
