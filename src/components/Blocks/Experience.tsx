import { ExperienceData } from "../../template/templateTypes"

const Experience = (props: ExperienceData) => {
    const { title, company, location, date, descriptions } = props
    return (
        <div className="break-inside-avoid-page w-full flex flex-col justify-start items-start mb-1 text-base">
            <div className="w-full flex flex-row justify-between items-center leading-5">
                <h3 className="font-semibold">
                    {title}
                </h3>
                <h3 className="font-semibold">
                    {date}
                </h3>
            </div>
            <div className="w-full flex flex-row justify-between items-center leading-5">
                <p>
                    {company}
                </p>
                <p>
                    {location}
                </p>
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

export { Experience }