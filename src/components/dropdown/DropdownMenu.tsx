import '../../index.css';

type Item = {
    name: string;
    image: string;
};

type DropdownMenuProps = {
    dropdownRef: React.RefObject<HTMLDivElement>;
    active: boolean;
    direction: string;
    items: Item[];
    setSelectedItem: React.Dispatch<React.SetStateAction<Item>>;
};

function DropdownMenu({dropdownRef, active, direction, items, setSelectedItem}: DropdownMenuProps) {
    let directionMenuStyle = '';
    if (direction == 'up') {
        directionMenuStyle = 'bottom-0 -translate-y-16 rounded-b-none border-b';
    } else if (direction == 'down') {
        directionMenuStyle = 'top-0 translate-y-16 rounded-t-none border-t';
    }

    let directionButtonStyle = '';
    if (direction == 'up') {
        directionButtonStyle = 'first:hover:rounded-t-md';
    } else if (direction == 'down') {
        directionButtonStyle = 'last:hover:rounded-b-md';
    }

    return (
        <div
            ref={dropdownRef}
            className={`w-60 absolute bg-zinc-800 bg-opacity-80 rounded-t-md text-white text-lg ${
                active ? directionMenuStyle : 'hidden'
            }`}>
            {items.map((item, index) => (
                <button
                    key={`button${index}`}
                    onClick={() => setSelectedItem(item)}
                    className={`h-20 w-full flex items-center justify-between gap-4 hover:bg-zinc-900 py-2 px-2 ${directionButtonStyle}`}>
                    <span className="grow">{item.name}</span>
                    <img src={item.image} className="h-12" />
                </button>
            ))}
        </div>
    );
}

export default DropdownMenu;
