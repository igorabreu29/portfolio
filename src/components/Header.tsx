import { List } from "lucide-react";

export function Header() {
    return (
        <header className="w-full py-6 px-20">
            <button className="cursor-pointer">
                <List size={20} color="#FFF" />
            </button>
        </header>
    )
}