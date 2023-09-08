import { useAppSelector } from '@/store/hooks'
import { openContextModal } from '@mantine/modals';
import React from 'react'

const HomeCart = () => {
    const cartItemsQuantity = useAppSelector((state) => state.cart.ids.length)
    console.log(cartItemsQuantity);

    const openCartModal = () => {
        openContextModal({
            modal: 'cartModal',
            size: 'xl',
            innerProps: {
            },
            styles: {
                body: {
                    background: 'linear-gradient(to right, #070070, #300045)'
                },
                header: {
                    background: 'linear-gradient(to right, #070070, #300045)'
                },
            }
        })
    };

    return (
        <div className='fixed bottom-0 flex justify-between items-center bg-cartBg text-white w-full p-2 md:w-40 md:h-40 md:rounded-3xl md:top-28 md:right-20 md:p-5 md:flex-col md:items-start xl:right-80'>
            <div>
                <h6 className='text-sm font-semibold'>Корзина</h6>
                <p className='text-xs'>{cartItemsQuantity} астероида</p>
            </div>
            <button
                className='rounded-3xl bg-btnBg p-4 font-semibold text-sm'
                onClick={openCartModal}
            >Отправить</button>
        </div>
    )
}

export default HomeCart