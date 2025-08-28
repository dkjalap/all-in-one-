import {toast} from "react-toastify"
export const handleSuccess=(msg) =>{
    toast.success(msg,{
        positon:'top-right'
    })
}

export const handleError = (mgi) =>{
    toast.success(mgi, {
        positon:'top-right'
    })
}