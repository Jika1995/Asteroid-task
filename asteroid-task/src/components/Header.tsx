import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col p-2 md:p-4'>
            <h1 className=' text-btnBg text-xl font-extrabold z-10'>
                ARMAGEDDON 2023
            </h1>
            <p className='text-white text-xs z-10'>
                ООО “Команда им. Б. Уиллиса”.
                <br />
                Взрываем астероиды с 1998 года.
            </p>
        </div>
    )
}

export default Header