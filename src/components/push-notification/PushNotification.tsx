import React from 'react'
import './style.css'

type PushNotificationProps = {
    onClick: () => void
    isVisible: boolean
}

export const PushNotification = ({onClick, isVisible}: PushNotificationProps) => {
    const openLinkedin = () => {
        window.open('https://br.linkedin.com/in/adriano-hardtke', '_blank')
    }

    return (
    <div className={`absolute bg-transparent h-[300px] w-max-fit z-0 bottom-0 right-0 ${!isVisible && 'hidden' }`} onClick={onClick}>
        <div className='absolute sm:right-8 sm:bottom-16 bottom-4 right-0 mx-2 sm:mx-0 sm:w-[500px] w-screen'>
            <div id="notification" className="disabled flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
                <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                        className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <div className="flex flex-col ml-3">
                        <div className="font-medium leading-none">Vamos conversar?</div>
                        <p className="text-sm text-gray-600 leading-none mt-1">
                        Clique no botão ao lado para ser redirecionado ao meu <strong>Linkedin</strong>.
                        </p>
                        </div>
                    </div>
                    <div className='flex sm:flex-col flew-row'>
                        <button className="flex-no-shrink bg-dark px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 text-white rounded-full" onClick={openLinkedin}>
                            Abrir
                        </button>
                        <button className="block flex-no-shrink bg-white px-5 ml-4 py-2 text-sm font-medium tracking-wider border mt-1 text-dark rounded-full" onClick= {onClick}>
                            Fechar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}