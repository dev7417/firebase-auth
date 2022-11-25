const initialState = {
    data:[]
}


export const dataReducer = (state = initialState, action) =>{
    switch(action.type){
        case "Send_Data":
        return{
            data: action.payload
        }
        default: return state

    }
}