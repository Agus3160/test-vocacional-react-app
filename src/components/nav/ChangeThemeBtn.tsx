import { Sun, Moon } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

type Props = {
  title?: string
}

export default function ChangeThemeBtn({title}: Props) {

  const {dark, setThemeValue} = useTheme();

  return (
    <button 
      onClick={() => setThemeValue(!dark)}
      className="w-full sm:hover:scale-105 hover:text-red-500 flex items-center gap-1"
    >
      {title}
      {!dark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}