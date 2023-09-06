import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col'>
            <h1 className=' text-orange-600 text-xl font-extrabold'>
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