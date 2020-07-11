const initState={
    isauthenticated:true,
    roles:[],
    token:null
   
}
const rootReducer=(state=initState,action)=>{
    if(action.type==='LOGIN')
    {
        return {
            ...state,
            isauthenticated:action.isauthenticated
        }
    }
    if(action.type==='ROLES')
    {
        return {
            ...state,
            roles:action.roles
        }
    }
    if(action.type==='TOKEN')
    {
        return{
        ...state,
        token:action.token
        }
    }
    return state;
   
}

export default rootReducer;