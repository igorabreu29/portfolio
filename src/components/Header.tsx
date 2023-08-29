import { List } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full px-20 py-6">
      <button className="cursor-pointer">
        <List size={20} color="#FFF" />
      </button>
    </header>
  )
}
