import { HeaderData } from "../../template/templateTypes"

const Header = (props: HeaderData) => {
    const { name,links } = props
    return (
        <div className="break-inside-avoid-page w-full flex flex-col items-center justify-center">
            <h1 className="font-medium text-2xl">
                {name.toUpperCase()}
            </h1>
            <ul className="w-full flex flex-row justify-center gap-1.5 text-base">
                {links.map((link, index) => (
                <li key={index} className="flex items-center gap-1">
                    <a
                        className="underline"
                        href={link.url} 
                        target="_blank" 
                    >
                        {link.name}
                    </a>
                    {index < links.length - 1 && <span className="text-gray-400">◇</span>}
                </li>
                ))}
            </ul>
        </div>
    )
}

export { Header }