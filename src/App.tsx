import './App.css'
import { Page } from './components/Page'
import { Education } from './components/Blocks/Education'
import { Experience } from './components/Blocks/Experience'
import { Header } from './components/Blocks/Header'
import { Project } from './components/Blocks/Project'
import { Skills } from './components/Blocks/Skills'
import { template } from "./template/template"
import { EducationData, ExperienceData, HeaderData, ProjectData, SectionData, SkillData } from './template/templateTypes'
import { Section } from './components/Section'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'

const App = () => {
  const { sections } = template
  const contentRef = useRef<HTMLDivElement>(null)

  const reactToPrintFn = useReactToPrint({
    contentRef,
  })

  const renderBlocks = (section: SectionData) => {
    const { type, blocks } = section
    switch (type) {
      case "header":
        return blocks.map((block, index) => (
          <Header key={`header-${index}`} {...block as HeaderData} />
        ))
      case "experiences":
        return blocks.map((block, index) => (
          <Experience key={`experience-${index}`} {...block as ExperienceData} />
        ))
      case "projects":
        return blocks.map((block, index) => (
          <Project key={`project-${index}`} {...block as ProjectData} />
        ))
      case "education":
        return blocks.map((block, index) => (
          <Education key={`education-${index}`} {...block as EducationData} />
        ))
      case "skills":
        return <Skills key="skills" data={blocks as SkillData[]} />
      default:
        return null
    }
  }

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <button 
        onClick={() => reactToPrintFn()} 
        className="mb-5 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Download / Print PDF
      </button>

      <div ref={contentRef}>
        <Page>
          {sections.map((section: SectionData, index: number) => (
            <Section title={section.title} key={index}>
              {renderBlocks(section)}
            </Section>
          ))}
        </Page>
      </div>
    </div>
  )
}

export default App
