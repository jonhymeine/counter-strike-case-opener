import '../index.css';
import container_background from '../assets/images/backgrounds/mirage.jpeg';
import ItemPool from './ItemPool';

function Container() {
    return (
        <main className="container mx-auto min-h-sm max-h-md relative overflow-hidden bg-slate-400 sm:mt-8">
            <img className="min-h-sm blur object-cover scale-110" src={container_background} />
            <div className="absolute inset-0 flex flex-col z-10">
                <ItemPool />
                <div className="block grow min-h-24"></div>
            </div>
        </main>
    );
}

export default Container;
