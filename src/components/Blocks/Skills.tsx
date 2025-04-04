import { SkillData } from "../../template/templateTypes"

interface SkillsProps {
    data: SkillData[]
}

const Skills = (props: SkillsProps) => {
    const { data } = props
    const categories = data.map((skillData) => skillData.category)
    const skills = data.map((skillData) => skillData.skills)

    return (
        <div className="break-inside-avoid-page w-full">
            <div className="w-full flex flex-row text-base">
                <div className="flex flex-col mr-4">
                    {categories.map((category: string) => (
                        <h3 key={category} className="font-semibold">
                            {category}
                        </h3>
                    ))}
                </div>
                <div className="flex flex-col items-start">
                    {skills.map((skillsData: string[], index: number) => (
                        <div key={categories[index]}>
                            {skillsData.join(", ")}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export { Skills }