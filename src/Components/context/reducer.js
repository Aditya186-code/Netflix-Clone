export const initialState = {
   user : null
};


export const reducer = (state,action) => {
    console.log(action.type)
    switch(action.type){
        case 'SET__LOGIN':
            return {
               user : action.data
            }
        case 'SET__LOGOUT':
            return {
                user : action.data
            }
        default:
            return state;
    }

}