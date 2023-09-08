import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useIsInCart = (id: string) => {
    const isInCart = useAppSelector(state => !!state.cart.ids.find(item => item === id));
    return isInCart;
}