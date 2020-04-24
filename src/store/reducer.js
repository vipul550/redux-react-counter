const initialState = {
    counter : 1 
}

const reducer = (state=initialState , action) =>{
        switch (action.type){
            case 'INC':
                return { 
                    ...state,
                    counter : state.counter+1
                }
            case 'DEC':
                 return {
                     ...state,
                     counter : state.counter-1
                 }   
            case 'INC_VAL':
                 return {
                     ...state,
                     counter: state.counter+action.value
                 }
            case 'SUB_VAL' : 
                return {
                    ...state,
                    counter:state.counter-action.value
                }        


        }

        return state;
}

export default reducer;