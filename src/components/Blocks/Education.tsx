import { EducationData } from "../../template/templateTypes"

const Education = (props: EducationData) => {
    const { school,degree,date,gpa,courses } = props
    return (
        <div className="break-inside-avoid-page w-full flex flex-col justify-start items-start mb-1">
            <div className="w-full flex flex-row justify-between items-center">
                <h3 className="font-semibold text-base">
                    {school}
                </h3>
                <h3 className="font-semibold text-base">
                    {date}
                </h3>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
                <p className="text-base">
                    {degree}
                </p>
                <p className="text-base">
                    GPA: {gpa}
                </p>
            </div>
            <div className="w-full text-base">
                <p>
                    <span className="font-semibold mr-1">
                        Relevant Courses:
                    </span>
                    {courses.join(", ")}
                </p>
            </div>
        </div>
    )
}

export { Education }