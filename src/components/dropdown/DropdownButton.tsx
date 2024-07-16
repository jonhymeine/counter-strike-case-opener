type Item = {
  name: string
  image: string
}

type DropdownButtonProps = {
  buttonRef: React.RefObject<HTMLButtonElement>
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  selectedItem: Item
  direction: string
}

export const DropdownButton = ({ buttonRef, active, setActive, selectedItem, direction }: DropdownButtonProps) => {
  let directionStyleOnActive = 'bg-zinc-900 '
  if (direction == 'up') {
    directionStyleOnActive += 'rounded-t-none'
  } else if (direction == 'down') {
    directionStyleOnActive += 'rounded-b-none'
  }

  return (
    <button
      ref={buttonRef}
      onClick={() => setActive(!active)}
      className={`w-60 h-16 flex items-center hover:bg-zinc-900  text-white font-bold text-xl py-2 px-4 rounded-md select-none ${active ? directionStyleOnActive : 'bg-zinc-800 bg-opacity-80'
        }`}>
      <span className="me-4">Switch Case</span>
      <img src={selectedItem.image} className="h-12" />
      <span className="material-symbols-rounded ms-auto">{active ? 'arrow_drop_down' : 'arrow_drop_up'}</span>
    </button>
  )
}