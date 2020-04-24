const redux = require('redux');
const CreateStore = redux.createStore;

const initialState = {
    counter : 0
}

const rootReducer = (state = initialState , action) => {
    if(action.type=='INC'){
        return{
            ...state,
            counter : state.counter+1
        }
    }
    if(action.type=='ADD'){
        return{
            ...state,
            counter : state.counter+action.value
        }
    }
    return state; 
}

const store = CreateStore(rootReducer);
store.subscribe(()=>{
    console.log('[subscrube]',store.getState());
})

console.log(store.getState());

store.dispatch({type:'INC'});
console.log(store.getState());
store.dispatch({type:'ADD',value:10})
console.log(store.getState());
