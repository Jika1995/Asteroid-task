import CartModal from "./CartModal";

export const modals = {
    cartModal: CartModal
} as const;

declare module '@mantine/modals' {
    export interface MantineModalsOverride {
        modals: typeof modals;
    }
}