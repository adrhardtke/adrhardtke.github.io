'use client'
import { useEffect, useState } from "react";
import { Header } from "@/components";
import { IoChevronForward } from "react-icons/io5";

import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoReact, IoLogoDocker, IoLogoNodejs, IoLogoGithub, IoGitBranchSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { LuTestTubes } from "react-icons/lu";
import { PiTestTubeFill } from "react-icons/pi";
import { BiSolidLayer, BiLogoTypescript, BiLogoRedux } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { GiPirateHook } from "react-icons/gi";




type SkillItemProps = {
    title: string;
    description?: string;
    Icon: any;
    type: 'hard' | 'soft';
}
const SkillItem: React.FC<SkillItemProps> = ({title, description, Icon, type}) => {
    return (
        <div className={`bg-[rgba(0,0,0,.05)] rounded-xl p-8 flex gap-4 sm:w-fit w-full items-center ${type === 'soft' && 'sm:w-full'}`}> 
            <div className={type === 'soft' ? 'sm:block hidden' : ''}>
                {Icon}
            </div>
            <div className="">
                <h3 className="text-md font-medium text-black">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

const skillsList = {
    hard: [
        {
            title: 'Javascript',
            description: '',
            Icon: <IoLogoJavascript size={48} color="#000" />
        },
        {
            title: 'HTML5',
            description: '',
            Icon: <IoLogoHtml5 size={48} color="#000" />
        },
        {
            title: 'CSS3',
            description: '',
            Icon: <IoLogoCss3 size={48} color="#000" />
        },
        {
            title: 'React',
            description: '',
            Icon: <IoLogoReact size={48} color="#000" />
        },
        {
            title: 'Docker',
            description: '',
            Icon: <IoLogoDocker size={48} color="#000" />
        },
        {
            title: 'DDD',
            description: '',
            Icon: <FaCode size={48} color="#000" />
        },
        {
            title: 'TDD',
            description: '',
            Icon: <LuTestTubes size={48} color="#000" />
        },
        {
            title: 'Jest e RTL',
            description: '',
            Icon: <PiTestTubeFill size={48} color="#000" />
        },
        {
            title: 'SOLID',
            description: '',
            Icon: <BiSolidLayer size={48} color="#000" />
        },
        {
            title: 'UX/UI',
            description: '',
            Icon: <MdOutlineDesignServices size={48} color="#000" />
        },
        {
            title: 'NodeJS',
            description: '',
            Icon: <IoLogoNodejs size={48} color="#000" />
        },
        {
            title: 'NextJS',
            description: '',
            Icon: <TbBrandNextjs size={48} color="#000" />
        },
        {
            title: 'TypeScript',
            description: '',
            Icon: <BiLogoTypescript size={48} color="#000" />
        },
        {
            title: 'GIT',
            description: '',
            Icon: <IoGitBranchSharp size={48} color="#000" />
        },
        {
            title: 'Github',
            description: '',
            Icon: <IoLogoGithub size={48} color="#000" />
        },
        {
            title: 'React Hooks',
            description: '',
            Icon: <GiPirateHook size={48} color="#000" />
        },
        {
            title: 'React Redux',
            description: '',
            Icon: <BiLogoRedux size={48} color="#000" />
        },
    ],
    soft: [
        {
            title: 'Comunicação',
            description: 'Falo e escuto com empatia, promovendo um ambiente onde todos são ouvidos. A comunicação é a cola que une equipes e transforma ideias em ação.',
            Icon: <IoChevronForward size={48} color="#000" />
        },
        {
            title: 'Organização',
            description: 'A organização é a arte de simplificar, garantindo que todos os detalhes estejam em seus devidos lugares.',
            Icon: <IoChevronForward size={48} color="#000" />
        },
        {
            title: 'Dedicação',
            description: 'Sou comprometido e apaixonado pelo que faço. Minha dedicação transparece na busca constante por aprimoramento e na disposição para enfrentar desafios. Além disso, comprometo-me profundamente com meus objetivos, enfrentando cada desafio com determinação',
            Icon: <IoChevronForward size={48} color="#000" />
        },
        {
            title: 'Motivação por Novos Projetos e Desafios',
            description: 'Tenho uma forte motivação para abraçar novos projetos e movido pela curiosidade sempre busco novos desafios. Encaro cada projeto como uma oportunidade de crescimento e inovação.',
            Icon: <IoChevronForward size={48} color="#000" />
        }      
    ]
}



export default function Skills() {
    const [selectedSkillType, setSelectedSkillType] = useState<'hard' | 'soft'>('hard')
    const [skills, setSkills] = useState(skillsList['hard'])

    useEffect(() => {
        setSkills([...skillsList[selectedSkillType]])
    },[selectedSkillType])

  return (
    <section className="min-h-screen px-4 sm:px-8 py-4 flex flex-col relative max-w-[1920px] mx-auto">
        <Header />
        <div id="my-skills" className="mt-16">
            <h1 className="text-2xl font-bold">Minhas skills</h1>
            <ul className="flex gap-8 mt-4">
                <li className="">
                    <button className="flex gap-2 items-center" onClick={() => setSelectedSkillType('hard')}>
                        <div className={`rounded-full p-1 ${selectedSkillType === 'hard' && 'bg-black text-white'}`}>
                            <IoChevronForward />
                        </div>
                        <span>Hard skills</span>
                    </button>
                </li>

                <li className="">
                    <button className="flex gap-2 items-center" onClick={() => setSelectedSkillType('soft')}>
                        <div className={`rounded-full p-1 ${selectedSkillType === 'soft' && 'bg-black text-white'}`}>
                            <IoChevronForward />
                        </div>
                        <span>Soft skills</span>
                    </button>
                </li>
            </ul>
        </div>
        <div className="mt-8 flex gap-4 flex-wrap">
            {
                skills.length === 0 && (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1>Nenhuma skill cadastrada :(</h1>
                    </div>
                )
            }
            {
                skills.map((skill) => (
                    <SkillItem 
                        key={skill.title}
                        title={skill.title}
                        description={skill.description}
                        Icon={skill.Icon}
                        type={selectedSkillType}
                    />
                ))
            }
        </div>
    </section>
  )
}
