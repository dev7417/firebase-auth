export const sendData = (item) =>{
    console.log(item)
    return{
        type: "Send_Data",
        payload: item
    }
}