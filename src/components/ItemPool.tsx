import '../index.css';
import Item from './Item';

function ItemPool() {
  const items = [];
  for (let i = 0; i < 18; i++) {
    items.push(<Item key={`Item${i}`} />);
  }
  return (
    <div className="p-4 pb-0 grid gap-x-8 gap-y-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 overflow-y-auto">
      {items.map(item => item)}
    </div>
  );
}

export default ItemPool;
