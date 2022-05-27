export function reducer(state, action){
    switch(action.type){
        case "UPDATE_SUCCESS_MESSAGE":
            console.log("SETTING ALERT MESSAGE");
            //setAlertMessage("Update successful");
            return {...state, alertMessage:action.payload}
        case "UPDATE_FAILURE_MESSAGE":
            console.log("SET_ALERT");
            return {...state, alertMessage:action.payload}
        case "CREATE_TODO_SUCCESS":
            return {...state, alertMessage:action.payload}
        case "CREATE_TODO_FAILURE":
            return {...state, alertMessage:action.payload}
        case "INCOMPLETE_FORM":
            return {...state, alertMessage:action.payload}
        default:
            return {...state, alertMessage:"Unknown action!"}
    }
};

