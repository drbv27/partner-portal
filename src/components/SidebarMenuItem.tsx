'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
  path: string,
  icon: JSX.Element,
  title: string,
  subtitle: string
}





const SidebarMenuItem = ({ path, icon, title, subtitle }:Props) => {
  const currentPath = usePathname()
  return (
    <Link href={path} 
      className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${(currentPath === path) && "bg-blue-800 rounded"} hover:bg-white/5 transition ease-linear duration-150`}>
      <div>
        <div>
          {icon}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-md font-bold leading-5 text-white invisible md:visible">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  )
}

export default SidebarMenuItem