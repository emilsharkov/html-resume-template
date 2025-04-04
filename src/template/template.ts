import {
    HeaderLink,
    HeaderData,
    ExperienceData,
    ProjectData,
    EducationData,
    SkillData,
    SectionData,
    PageData
} from "./templateTypes";

export const template: PageData = {
    sections: [
        {
            type: "header",
            blocks: [
                {
                    name: "John Doe",
                    links: [
                        {
                            name: "john.doe@alumni.stanford.edu",
                            url: "mailto:john.doe@alumni.stanford.edu",
                        } as HeaderLink,
                        {
                            name: "johndoe.dev",
                            url: "https://johndoe.dev",
                        } as HeaderLink,
                        {
                            name: "linkedin.com/in/johndoe",
                            url: "https://www.linkedin.com/in/johndoe/",
                        } as HeaderLink,
                        {
                            name: "github.com/johndoe",
                            url: "https://github.com/johndoe"
                        } as HeaderLink,
                    ] as HeaderLink[],
                } as HeaderData,
            ] as HeaderData[],
        } as SectionData,
        {
            type: "experiences",
            title: "Work History",
            blocks: [
                {
                    type: "experiences",
                    title: "Machine Learning Engineer",
                    company: "OpenAI",
                    location: "San Francisco, CA",
                    date: "August 2024 - Present",
                    descriptions: [
                        "Fine-tuned large language models for domain-specific applications using PyTorch and Hugging Face Transformers",
                        "Developed and maintained internal tools to evaluate LLM responses for factual accuracy and safety using LangChain and TypeScript",
                        "Collaborated with research team to implement retrieval-augmented generation pipelines for enterprise clients"
                    ] as string[],
                } as ExperienceData,
                {
                    type: "experiences",
                    title: "AI Research Intern",
                    company: "Anthropic",
                    location: "San Francisco, CA",
                    date: "June - August 2023",
                    descriptions: [
                        "Conducted research on alignment strategies for language models, contributing to a paper submitted to NeurIPS 2023",
                        "Built a system to generate synthetic datasets for fine-tuning using GPT-3 and prompt engineering",
                        "Improved performance of context window management using vector databases and dynamic chunking in LangChain"
                    ] as string[],
                } as ExperienceData,
                {
                    title: "Software Engineer Intern",
                    company: "Meta (AI Research Team)",
                    location: "Menlo Park, CA",
                    date: "June - August 2022",
                    descriptions: [
                        "Integrated LLM-based chatbot into Workplace using React, GraphQL, and Node.js",
                        "Implemented tools to visualize attention maps across transformer layers using D3.js and PyTorch hooks",
                        "Collaborated with researchers to benchmark LLM performance across multilingual datasets using custom evaluation pipelines"
                    ] as string[],
                } as ExperienceData,
            ] as ExperienceData[], 
        } as SectionData,
        {
            type: "projects",
            title: "Projects",
            blocks: [
                {
                    title: "LLM Chatbot for Research Papers",
                    link: "github.com/johndoe/PaperBot",
                    descriptions: [
                        "Built a chatbot that summarizes and answers questions about academic papers using OpenAI's GPT-4"
                    ],
                } as ProjectData,
                {
                    title: "Code Autocompletion Plugin",
                    link: "github.com/johndoe/SmartComplete",
                    descriptions: [
                        "Developed a VSCode extension for code autocompletion trained on open-source GitHub repos"
                    ]
                } as ProjectData
            ] as ProjectData[],
        } as SectionData,
        {
            type: "education",
            title: "Education",
            blocks: [
                {
                    school: "Stanford University",
                    degree: "Bachelor of Science in Computer Science",
                    date: "Sep 2019 - Jun 2023",
                    gpa: "3.9/4.0",
                    courses: [
                        "Natural Language Processing", 
                        "Deep Learning",
                        "Large Language Models", 
                        "Distributed Systems", 
                        "Algorithms", 
                        "Ethics of AI", 
                        "Human-Computer Interaction", 
                        "Reinforcement Learning", 
                    ] as string[],
                } as EducationData
            ] as EducationData[]
        } as SectionData,
        {
            type: "skills",
            title: "Skills",
            blocks: [
                {
                    category: "Machine Learning",
                    skills: [
                        "PyTorch",
                        "TensorFlow",
                        "Hugging Face Transformers",
                        "Scikit-learn",
                        "LangChain",
                        "OpenAI",
                    ] as string[],
                } as SkillData,
                {
                    category: "Back End",
                    skills: [
                        "Python",
                        "Node.js",
                        "FastAPI",
                        "PostgreSQL",
                        "MongoDB",
                        "Docker",
                        "Redis"
                    ] as string[],
                } as SkillData,
                {
                    category: "Tools & Infra",
                    skills: [
                        "Git",
                        "AWS",
                        "Kubernetes",
                        "Bash",
                        "VSCode",
                        "Jupyter",
                        "Vercel"
                    ] as string[],
                } as SkillData,
            ] as SkillData[],
        } as SectionData,
    ]
}
