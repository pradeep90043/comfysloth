export const Add = (item) => {
    return{
        type:"ADD",
        payload:item

    }
}

export const Remove = (id) => {
    return{
        type:"REMOVE",
        payload:id

    }
}

export const AddToCart = (item) => {
    return{
        type:"ADDTOCART",
        payload:item
    }
}
export const subtotalPrice  = (price) => {
    return {
        type:"SENDTOTALPRICE",
        payload:price
    }
}
export const Clear = () => {
    return{
        type:"CLEAR",
    }
}
export const selectedColor = (color) => {
    return{
        type:"ADDINGCOLOR",
        payload:color
    }
}
export const resetSlider = (onChange) => {
    return{
        type:"RESETSLIDER",
        payload:onChange
    }
}

// export const FilterSliderPrice = (price) => {
//     return{
//         type:"FILTERPRICE",
//         payload:price

//     }
// }