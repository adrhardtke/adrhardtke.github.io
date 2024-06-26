'use client'
import Image from 'next/image'
import { Header, Logo, PushNotification, SocialIcons, UserInfo } from '@/components'
import './styles.css'
import { useNotification } from '@/hooks/useNotification'

const courses = [
  {
    title: 'ReactJS, Hooks, Recoil, TDD, Clean Architecture, SOLID',
    url: 'https://www.udemy.com/course/react-com-mango/'
  },
  {
    title: 'Webpack do básico ao avançado + Projeto e Micro-frontend',
    url: 'https://www.udemy.com/course/webpack-do-basico-ao-avancado-com-projeto/'
  },
  {
    title: 'FullStackJS com TypeScript, Node e Vue.js - Branas.io',
    url: ''
  },
  {
    title: 'Clean Code e Clean Architecture - Branas.io',
    url: ''
  },
  {
    title: 'Formação Arquiteto de Software - Desenvolvedor.io',
    url: 'https://desenvolvedor.io/formacao/arquiteto-de-software'
  },
  {
    title: 'Docker - FullCycle',
    url: 'https://fullcycle.com.br/'
  },
  {
    title: 'DDD - FullCycle',
    url: 'https://fullcycle.com.br/'
  },
  {
    title: 'Padrões e técnicas avançadas com Git e Github - FullCycle',
    url: 'https://fullcycle.com.br/'
  },
  {
    title: 'SOLID Express - FullCycle',
    url: 'https://fullcycle.com.br/'
  },
  {
    title: 'Redux com React - Origamid',
    url: 'https://www.origamid.com/curso/redux-com-react/'
  },
  {
    title: 'UX Design - Awari',
    url: 'https://awari.com.br/curso/ux-design/'
  },
  {
    title: 'Formação NodeJS - Alura',
    url: 'https://www.rocketseat.com.br/'
  },
  {
    title: 'Formação Desenvolvimento de IA (em andamento) - Rocketseat',
    url: 'https://www.rocketseat.com.br/'
  },
  {
    title: 'React Avançado: Crie aplicações com NextJS, Strapi e mais (em andamento) - Udemy',
    url: 'https://www.udemy.com/course/react-avancado/'
  }
]

export default function AboutMe() {
  const { isVisbileNotification, onClickNotification} = useNotification()

  return (
    <div className='relative'>
    <section className="min-h-screen px-4 sm:px-8 py-4 flex flex-col relative max-w-[1920px] mx-auto">
        <Header />
        <div className='mt-16 flex items-center justify-between'>
          <div className='mr-8'>
            <h1 className='text-xl font-bold'>Quem sou eu</h1>
            <div className='my-4'>
              <Logo />
            </div>
            <div className="leading-7 max-w-[800px] paragraph-wrapper">
              <p>Se você ainda não me conhece, muito prazer, meu nome é <strong>Adriano G. Hardtke</strong>, tenho 27 anos, sou graduando do curso de ciência da computação e desenvolvedor front-end.</p>
              <p>Possuo uma base sólida em HTML, CSS, Git, até o que há de mais moderno e avançado em Javascript, TypeScript, NextJS, React, Testes, Redux, Clean Code, Solid, TDD e DDD. Apesar de não utilizar no meu dia-a-dia, já tive contato com PHP (Laravel), React Native, VueJs, Angular e também UI/UX. </p>
              <p>Meu objetivo é seguir evoluindo na área de front-end, e dominar as melhores ferramentas do mercado, sempre focando no produto mas sem esquecer do cliente. Tornando aquilo que antes era apenas uma ideia, algo concreto, utilizável, bonito e eficaz.</p>
              <p>Além dos aprendizados de mercado, também adquiri muito conhecimento dentro da graduação, as quais incluem uma ótima base em lógica de programação, orientação a objetos e estrutura de dados, linguagens como C e Java.</p>
              <p>Por fim, em conjunto a estes conhecimentos técnico, possuo algumas características não-tecnicas como: comunicação, organização, dedicação, motivação por novos projetos e desafios.</p>
              <p className='font-medium p-2 bg-[#F9CFBB] rounded-md'>Estou sempre em constante aprendizado, isso é algo que me motiva!</p>
              <div className='p-4 pl-0'>
                <h2 className='font-bold text-md'>Cursos e Certificações</h2>
                <ul>
                  {courses.map(course => (
                    <li key={course.title} className={`${course.url && 'underline'}`}>
                      {course.url && (
                        <a href={course.url} target='_blank' rel='noopener noreferrer'>{course.title}</a>
                      )}
                      {!course.url && course.title}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
            <div className='mt-4 flex justify-between items-center'>
              <UserInfo type="row" onClick={onClickNotification} />
              <SocialIcons />
            </div>
          </div>
          <Image src="/hero-background-about.png" alt='Hero background image' height={600} width={193} className='hidden sm:block' />
        </div>
    </section>
    <PushNotification onClick={onClickNotification} isVisible={isVisbileNotification} />
  </div>
  )
}
