import '../index.css';
import weapon_skin from '../assets/images//cases/case_1/nightwish.png';

function Item() {
    return (
        <div className="w-full h-full">
            <div className="h-40 bg-gradient-to-b from-20% from-zinc-600 to-90% to-zinc-400">
                <img className="w-full h-full object-cover border-b-8 border-red-600" src={weapon_skin} />
            </div>
            <div>
                <h2 className="text-white font-bold">AK-47</h2>
                <p className="text-white">Nightwish</p>
            </div>
        </div>
    );
}

export default Item;
