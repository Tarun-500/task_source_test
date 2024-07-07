import 'rc-slider/assets/index.css';
import Slider from 'rc-slider'; 
import ProverSlider from './ProverSlider';
import { useState } from 'react'; 

const marks = {
  0: '',
  20: 'Good',
  40: 'Very Good',
  60: 'Ideal',
  80: 'True Hearts\u2122',
  100: '',
};

export default function SliderBar() {
  const [popoverSlide, setPopoverSlide] = useState(false);

  const toggleSlider = () => {
    setPopoverSlide(!popoverSlide);
  };
  return (
    <div className='slider_wrapper'>
      <p className='text-nowrap'>
        <div className='mb-3 mb-lg-0'>
          <p> Cut <ProverSlider isOpen={popoverSlide} toggle={toggleSlider} /></p>
        </div>
      </p>
      <div style={{ width: '80%', margin: 'auto' }}>
        <Slider
          min={0}
          max={100}
          defaultValue={[0, 100]}
          pushable={true}
          marks={marks} 
          range
        />
      </div>
    </div >
  );
}
