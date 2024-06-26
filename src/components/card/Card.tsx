import React from 'react'

type CardProps = {
    title: string,
    description: string,
    Icon: JSX.Element
}

export const Card: React.FC<CardProps> = ({title, description, Icon}) => {
  return (
    <div className='bg-[#F9EAE3] rounded py-3 px-3 min-w-[263px] max-w-full sm:max-w-[560px] border border-[#F9CFBB] mb-2'>
        <div id="card-title" className='flex items-center'>
            {Icon}
            <span className='ml-4 font-bold'>{title}</span>
        </div>
        <p className='mt-2 text-light'>{description}</p>
    </div>
  )
}
