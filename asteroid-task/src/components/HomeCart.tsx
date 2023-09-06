import React from 'react'

const HomeCart = () => {
    return (
        <div className='fixed bottom-0 flex justify-between items-center bg-slate-700 text-white w-full p-2'>
            <div>
                <h6 className='text-sm font-semibold'>Корзина</h6>
                <p className='text-xs'>2 астероида</p>
            </div>
            <button className='rounded-3xl bg-orange-600 p-4 font-semibold text-sm'>Отправить</button>
        </div>
    )
}

export default HomeCart