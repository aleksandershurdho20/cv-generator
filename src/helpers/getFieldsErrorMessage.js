export const getFieldErrorMessage = (field,i) =>{
    if(typeof field === "object"){
        return field[i]
    }

}


