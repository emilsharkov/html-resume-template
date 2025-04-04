interface SectionProps {
    title?: string;
    children: React.ReactNode
}

const Section = (props: SectionProps) => {
    const { title,children } = props
    return (
        <section id={title} className="w-full flex flex-col">
            {title !== undefined && (
                <>
                    <h2 className="font-semibold text-lg">
                        {title.toUpperCase()}
                    </h2>
                    <hr className="w-full border-1 my-0.5"/>
                </>
            )}
            {children}
        </section>
    )
}

export { Section }