interface HeaderLink {
    name: string;
    url: string;
}

interface HeaderData {
    name: string;
    links: HeaderLink[];
}

interface ExperienceData {
    title: string;
    company: string;
    location: string;
    date: string;
    descriptions: string[];
}

interface ProjectData {
    title: string;
    link: string;
    descriptions: string[];
}

interface EducationData {
    school: string;
    degree: string;
    date: string;
    gpa: string;
    courses: string[];
}

interface SkillData {
    category: string;
    skills: string[];
}

type Block = HeaderData | ExperienceData | ProjectData | EducationData | SkillData;

interface SectionData {
    type: "header" | "experiences" | "projects" | "education" | "skills";
    title?: string;
    blocks: Block[];
}

interface PageData {
    sections: SectionData[];
}

export type {
    HeaderLink,
    Block,
    HeaderData,
    ExperienceData,
    ProjectData,
    EducationData,
    SkillData,
    SectionData,
    PageData
}