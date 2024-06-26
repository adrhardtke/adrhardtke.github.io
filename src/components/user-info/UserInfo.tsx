import Image from 'next/image'
import React from 'react'

type UserInfoProps = {
  type: 'row' | 'column'
} & React.HTMLAttributes<HTMLDivElement>

export const UserInfo: React.FC<UserInfoProps> = ({type, ...props}) => {
  return (
    <div className={`flex items-center ${type === 'row' ? 'flex-row' : 'flex-col'}`} {...props}>
        <div className={`w-[48px] h-[48px] relative ${props.onClick ? 'hover:cursor-pointer' : ''}`}>
            <Image alt="Adriano Hardtke Imagem" src="/adriano-hardtke.jpeg" className='rounded-full' width={48} height={48} />
            <div className='w-[16px] h-[16px] bg-[#FF5C00] rounded-full absolute top-0 right-0 align-center justify-center text-white text-xs text-center'>1</div>
            <div className='animate-ping w-[16px] h-[16px] bg-[#FF5C00] rounded-full absolute top-0 right-0 align-center justify-center text-white text-xs text-center' />
        </div>
        <div className={`${type === 'row' ? 'text-left' : 'text-center'} mt-2 ${type === 'row' && 'ml-2'}`}>
            <h6 className='text-sm font-medium'>Adriano Hardtke</h6>
            <p className='text-xs'>Front-end Developer</p>
        </div>
    </div>
  )
}
