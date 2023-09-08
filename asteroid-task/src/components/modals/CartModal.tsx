import { useAppSelector } from '@/store/hooks'
import { Paper, Title } from '@mantine/core'
import React from 'react'
import CartItem from '../CartItem'

const CartModal = () => {

    const cartItems = useAppSelector((state) => state.cart.entities)
    console.log(cartItems);

    if (Object.values(cartItems).length === 0) return <Title size='sm' align='center' color='white'>В вашей корзине еще нет заказов!</Title>

    return (

        <div
            className='text-white'
        >
            <Title size='sm' align='center'>
                Ваш заказ успешно оформлен!
            </Title>

            <div className='py-10 divide-y divide-gray-300'>
                {
                    Object.values(cartItems).map(item => (
                        <CartItem item={item!} key={item?.id} />
                    ))
                }
            </div>
        </div>

    )
}

export default CartModal