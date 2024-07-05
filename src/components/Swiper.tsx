import React from 'react';
import Swipe from 'react-easy-swipe';

interface IProps {
  close: boolean;
  onCollapse: (collapse: boolean) => void;
}

const Swiper = ({ close, onCollapse }: IProps): React.JSX.Element => (
  <Swipe onSwipeUp={() => onCollapse(false)} onSwipeDown={() => onCollapse(true)}>
    <div className='swiper' />
    <div className='flex flex-space-between flex-v-center legend-header'>
      <h5>Legend & Search</h5>
      <button type='button' onClick={() => onCollapse(!close)}>
        <span className='material-symbols-outlined down-icon pointer active-opacity'>
          {close ? 'expand_less' : 'expand_more'}
        </span>
      </button>
    </div>
  </Swipe>
);

export default Swiper;
