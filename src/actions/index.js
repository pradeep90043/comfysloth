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



