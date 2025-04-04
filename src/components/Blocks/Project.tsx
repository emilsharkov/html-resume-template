import { ProjectData } from "../../template/templateTypes"

const Project = (props: ProjectData) => {
    const { title,link,descriptions } = props

    return (
        <div className="break-inside-avoid-page w-full flex flex-col">
            <div className="w-full flex flex-row justify-between items-center font-semibold">
                <h3>
                    {title}
                </h3>
                <h3>
                    {link}
                </h3>
            </div>
            <ul className="list-disc list-outside pl-6">
                {descriptions.map((description: string) => (
                    <li key={description}>
                        {description}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export { Project }