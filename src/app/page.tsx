'use client'

import { Button, Card, Header, PushNotification, SocialIcons, UserInfo } from '@/components'
import { BiDownload } from 'react-icons/bi'
import { BsFillLaptopFill, BsFillPersonLinesFill } from "react-icons/bs";


import Image from 'next/image'
import { useNotification } from '@/hooks/useNotification';
export default function Home() {
  const { isVisbileNotification, onClickNotification} = useNotification()

  const handleDownload = () => {
    window.open('https://file.io/Tu7SQv4AZtpK', '_blank');
  }

  return (    
    <div className='relative'>
    <main className="min-h-screen px-4 sm:px-8 py-4 flex flex-col items-center relative max-w-[1920px] mx-auto">
      <Header />
      <div className='flex flex-1 items-center justify-center lg:justify-between flex-wrap lg:flex-nowrap lg:mt-0 mt-8 '>
        <section id="hero" className='max-w-sm md:max-w-xl mr-8 flex flex-col justify-center text-center lg:text-left'>
          <h1 className='text-4xl'>
          Olá, bem-vindo a minha página pessoal.
          </h1>
          <p className='mt-4 text-light mb-8'>
            Se você ainda não me conhece, muito prazer, meu nome é Adriano G. Hardtke, sou estudante do curso de ciência da computação e desenvolvedor front-end. 
          </p>
          <div className='max-w-fit m-auto lg:m-0 lg:mb-0 mb-8'>
            <Button title="Download curriculum" variant="primary" Icon={<BiDownload size="24" className="mr-2" />} onClick={handleDownload} />
            <SocialIcons />
          </div>
        </section>
        <div className='flex items-center flex-wrap flex-1 flex-col xl:flex-row justify-center xl:justify-left'>
          <Image src={'/hero-background.png'} alt="Background Image Hero" width={307} height={536} className='mb-4' />
          <div className='ml-4 sm:flex gap-4 xl:block'>
            <Card
              title="Skills"
              description="Minhas habilidades não são apenas linhas de código; são ferramentas para construir o futuro. Com uma base sólida em desenvolvimento, mergulho em projetos desafiadores, sempre ansioso para aprender e aplicar novas tecnologias"
              Icon={<BsFillLaptopFill />}
            />
            <Card
              title="Quem sou eu"
              description="Apaixonado por transformar ideias em soluções práticas, sou um entusiasta da inovação tecnológica. Seja na resolução de problemas complexos ou na criação de experiências envolventes, meu objetivo é deixar uma marca positiva."
              Icon={<BsFillPersonLinesFill />}
            />
          </div>
        </div>
      </div>
      <div className='lg:absolute lg:bottom-16 lg:left-8 relative w-full sm:w-auto'>
        <UserInfo type='column' onClick={onClickNotification} />
      </div>
    </main>
    <PushNotification onClick={onClickNotification} isVisible={isVisbileNotification} />
    </div> 
  )
}
