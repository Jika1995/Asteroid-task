import { useAppSelector } from '@/store/hooks'
import React from 'react'

const HomeCart = () => {
    const cartItemsQuantity = useAppSelector((state) => state.cart.ids.length)
    console.log(cartItemsQuantity);

    return (
        <div className='fixed bottom-0 flex justify-between items-center bg-slate-700 text-white w-full p-2'>
            <div>
                <h6 className='text-sm font-semibold'>Корзина</h6>
                <p className='text-xs'>{cartItemsQuantity} астероида</p>
            </div>
            <button className='rounded-3xl bg-orange-600 p-4 font-semibold text-sm'>Отправить</button>
        </div>
    )
}

export default HomeCart