import React from 'react'
import { Logo, Menu } from '@/components'

export const Header = () => {
  return (
    <div className='flex items-center justify-center w-full'>
        <Logo />
        <Menu className='flex-1 text-center' />
    </div>
  )
}
