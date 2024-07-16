import containerBackground from '../assets/images/backgrounds/mirage.jpeg'
import ItemPool from './ItemPool'
import ControlBar from './ControlBar'

const Container = () => (
  <main className="container mx-auto min-h-sm max-h-md relative overflow-hidden bg-slate-400 sm:mt-8">
    <img className="min-h-sm blur object-cover scale-110" src={containerBackground} />
    <div className="absolute inset-0 flex flex-col z-10">
      <ItemPool />
      <ControlBar />
    </div>
  </main>
)

export default Container