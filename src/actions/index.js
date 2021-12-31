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
