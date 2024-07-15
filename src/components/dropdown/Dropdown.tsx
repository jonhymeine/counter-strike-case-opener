import { useRef, useState } from 'react';
import '../../index.css';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';

type Item = {
  name: string;
  image: string;
};

type DropdownProps = {
  direction: string;
  items: Item[];
};

function Dropdown({ direction, items }: DropdownProps) {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  window.addEventListener('click', e => {
    const target = e.target as HTMLElement;
    let buttonClicked = false;
    if (target.parentElement == buttonRef.current || target == buttonRef.current) {
      buttonClicked = true;
    }
    if (target !== dropdownRef.current && !buttonClicked) {
      setActive(false);
    }
  });

  return (
    <div className="relative">
      <DropdownButton
        buttonRef={buttonRef}
        active={active}
        setActive={setActive}
        selectedItem={selectedItem}
        direction={direction}
      />
      <DropdownMenu
        dropdownRef={dropdownRef}
        active={active}
        direction={direction}
        items={items}
        setSelectedItem={setSelectedItem}
      />
    </div>
  );
}

export default Dropdown;
