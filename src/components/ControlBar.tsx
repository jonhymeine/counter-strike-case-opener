import '../index.css';
import Dropdown from './dropdown/Dropdown';
import nightmareCase from '../assets/images/cases/nightmare_case/case.png';
import gammaCase from '../assets/images/cases/gamma_case/case.png';
import spectralCase from '../assets/images/cases/spectrum_case/case.png';

function ControlBar() {
  const items = [
    { name: 'Dreams & Nightmare Case', image: nightmareCase },
    { name: 'Gamma Case', image: gammaCase },
    { name: 'Spectral Case', image: spectralCase },
  ];
  return (
    <div className="flex grow min-h-24 items-center justify-center">
      <Dropdown direction={'up'} items={items} />
    </div>
  );
}

export default ControlBar;
