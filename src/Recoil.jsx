import { atom } from 'recoil'

export const CartItem = atom({
    key: 'CartItem',
    default: []
})

export const LikedItem = atom({
    key: 'LikedItem',
    default: []
})