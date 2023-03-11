import React,  { createContext, useContext, useState } from 'react'

const CartContext = createContext();
export function useCart() {
    return useContext(CartContext)
}
export default function cartProvider({children}) {
    return (
        <CartContext.Provider >
            {children}
        </CartContext.Provider>
    )
}
