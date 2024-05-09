import '../index.css';
import container_background from '../assets/images/mirage.jpeg';

function Container() {
    return (
        <main className="w-full lg:container mx-auto aspect-video relative overflow-hidden bg-slate-400">
            <img className="h-full absolute blur object-cover scale-105" src={container_background} />
            <div className="h-full"></div>
        </main>
    );
}

export default Container;
