import { createSlice } from '@reduxjs/toolkit'
import Swal  from 'sweetalert2'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtoCart : (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
            if(!existingItem) {
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Item Sukses Ditambahkan",
                    showConfirmButton: false,
                    timer:1500
                });
            } else {
                Swal.fire({
                    title: "Item Sudah Ada Di Cart",
                    text: "Kamu Tidak Bisa Menambah Mobil Yang Sama",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText:"Ok!"
                })
            }
        },
        removeFromcart: (state, action) => {
            state.cartItems = state.cartItems.filter (item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems= []
        }
    }
})

// export action
export const {addtoCart, removeFromcart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;