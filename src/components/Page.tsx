interface PageProps {
    children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
    return (
        <div className="w-[8.5in] min-h-[11in] py-[0.5in] px-[0.75in] flex flex-col items-center bg-white shadow-lg print:shadow-none print:bg-white">
            {children}
        </div>
    )
}

export { Page }
  