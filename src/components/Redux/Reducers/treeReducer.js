import FakeData from '../../../FakeData/FakeData.json'

const initialState = {
    cart:[],
    product:FakeData,
    remove:[]
}
const booksReducers=(state=initialState,action) =>{
    console.log('state',state.cart)
    switch(action.type){
        case 'ADD_TO_CART':
            const newStore = {
                ...state,
                addingCart:[...state.cart,action.payload]

            }
            return newStore
  
            
            

        default:
            return state
              
    }
   
}
export default booksReducers